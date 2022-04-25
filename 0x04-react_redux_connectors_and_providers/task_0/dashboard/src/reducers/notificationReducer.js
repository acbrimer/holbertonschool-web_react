import { Map } from 'immutable';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
  notifications: { ids: [], data: {}, filter: null },
  messages: { ids: [], data: {}, filter: null },
  users: { ids: [], data: {}, filter: null },
});

export default (action, state = initialState) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep(notificationsNormalizer(action.data));
    case MARK_AS_READ:
      return state.setIn(
        [
          'notifications',
          'data',
          state.getIn(['notifications', 'ids', action.index]),
          'isRead',
        ],
        true
      );
    case SET_TYPE_FILTER:
      return state.setIn(['notifications', 'filter'], action.filter);
    default:
      return state;
  }
};
