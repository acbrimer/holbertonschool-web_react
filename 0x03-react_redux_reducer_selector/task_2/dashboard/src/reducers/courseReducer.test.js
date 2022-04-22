import { assert } from 'chai';
import {
  selectCourse,
  unSelectCourse,
  fetchCourseSuccess,
} from '../actions/courseActionCreators';
import courseReducer, { initialState, defaultData } from './courseReducer';

describe('courseReducer', () => {
  it('Default state returns an empty array', () => {
    const state = courseReducer({ type: null }, initialState);
    assert.deepEqual(state, initialState);
  });
  it('FETCH_COURSE_SUCCESS returns the data passed', () => {
    const state = courseReducer(fetchCourseSuccess(defaultData), initialState);
    assert.deepEqual(
      state,
      defaultData.map((r) => ({ ...r, isSelected: false }))
    );
  });
  it('SELECT_COURSE returns the data with the right item updated', () => {
    const state = courseReducer(selectCourse(1), defaultData);
    assert.isTrue(state[1].isSelected);
  });
  it('UNSELECT_COURSE returns the data with the right item updated', () => {
    let state = courseReducer(selectCourse(1), defaultData);
    state = courseReducer(unSelectCourse(1), state);
    assert.isFalse(state[1].isSelected);
  });
});
