import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';

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

export const initialState = [];

export default (action, state = initialState) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((r) => ({ ...r, isSelected: false }));
    case SELECT_COURSE:
      return state.map((r, ix) =>
        ix === action.index ? { ...r, isSelected: true } : r
      );
    case UNSELECT_COURSE:
      return state.map((r, ix) =>
        ix === action.index ? { ...r, isSelected: false } : r
      );
    default:
      return state;
  }
};
