import { Map } from 'immutable';

export const filterTypeSelected = (state) =>
  state.getIn(['notifications', 'filter']);

export const getNotifications = (state) => state.get('notifications');

export const getUnreadNotifications = (state) => {
  const d = state.get('notifications').toJS();
  return Map(
    Object.fromEntries(
      d.ids
        .map((id) => d.data[id])
        .filter((n) => !n.isRead)
        .map((n) => [n.id, n])
    )
  );
};
