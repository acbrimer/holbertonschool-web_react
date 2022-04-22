import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';
import { List } from 'immutable';
import { courseNormalizer } from '../schema/courses';

export const defaultData = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
];

export const initialState = List([]);

export default (action, state = initialState) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const n = courseNormalizer(action.data);
      return List([
        ...state.toJS(),
        ...n.result.map((id) => n.entities.courses[id]),
      ]);
    case SELECT_COURSE:
      return state.setIn([action.index, 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn([action.index, 'isSelected'], false);
    default:
      return state;
  }
};
