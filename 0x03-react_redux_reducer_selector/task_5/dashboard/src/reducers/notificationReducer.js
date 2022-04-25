import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';

export const defaultData = [
  {
    id: 1,
    type: 'default',
    value: 'New course available',
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New resume available',
  },
  {
    id: 3,
    type: 'urgent',
    value: 'New data available',
  },
];

export const initialState = { filter: null, data: [] };

export default (action, state = initialState) => {
  switch (action.type) {
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((n, ix) =>
          ix === action.index ? { ...n, isRead: true } : n
        ),
      };
    case SET_TYPE_FILTER:
      return { ...state, filter: action.filter };
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((d) => ({ ...d, isRead: false })),
      };
    default:
      return state;
  }
};
