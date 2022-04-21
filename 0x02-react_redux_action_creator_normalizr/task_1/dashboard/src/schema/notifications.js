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

export function getAllNotificationsByUser(userId) {
  return filter(notifications_json, { author: { id: userId } }).map(
    (notification) => notification.context
  );
}

export default normalize(notifications_json, [notification]);
