import notifications_json from './notifications.json';
import { filter } from 'lodash';

export function getAllNotificationsByUser(userId) {
  return filter(notifications_json, { author: { id: userId } }).map(
    (notification) => notification.context
  );
}
