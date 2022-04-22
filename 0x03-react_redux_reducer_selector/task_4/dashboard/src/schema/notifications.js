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

export const notificationsNormalizer = (data) =>
  normalize(data, [notification]);

const data = notificationsNormalizer(notifications_json);

export function getAllNotificationsByUser(userId) {
  return filter(
    data.result.map((r) => data.entities.notifications[r]),
    { author: userId }
  ).map((n) => data.entities.messages[n.context]);
}

export default data;
