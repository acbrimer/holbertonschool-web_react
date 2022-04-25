import notifications_json from './notifications.json';
import { filter } from 'lodash';
import { schema, normalize } from 'normalizr';

export const user = new schema.Entity('users');

export const message = new schema.Entity(
  'messages',
  {},
  { idAttribute: 'guid' }
);

export const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const notificationsNormalizer = (data) => {
  const n = normalize(data, [notification]);
  if (n && n.notifications && n.messages && n.users) {
    return {
      notifications: {
        data: Object.fromEntries(
          n.result.map((id) => [
            id,
            { ...n.entities.notifications[id], isRead: false },
          ])
        ),
        ids: n.result,
      },
      messages: {
        data: n.entities.messages,
        ids: Object.keys(n.entities.messages),
      },
      users: { data: n.entities.users, ids: Object.keys(n.entities.users) },
    };
  }
  return {};
};

const data = notifications_json;

export function getAllNotificationsByUser(userId) {
  return filter(
    data.result.map((r) => data.entities.notifications[r]),
    { author: userId }
  ).map((n) => data.entities.messages[n.context]);
}

export default data;
