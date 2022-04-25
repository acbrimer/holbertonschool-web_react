import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';
import { Map } from 'immutable';
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

export const initialState = Map({
  courses: { ids: [], data: {}, filter: null },
});

export default (action, state = initialState) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.mergeDeep(courseNormalizer(action.data));
    case SELECT_COURSE:
      return state.setIn(
        [
          'courses',
          'data',
          state.getIn(['courses', 'ids', action.index]),
          'isSelected',
        ],
        true
      );
    case UNSELECT_COURSE:
      return state.setIn(
        [
          'courses',
          'data',
          state.getIn(['courses', 'ids', action.index]),
          'isSelected',
        ],
        false
      );
    default:
      return state;
  }
};
