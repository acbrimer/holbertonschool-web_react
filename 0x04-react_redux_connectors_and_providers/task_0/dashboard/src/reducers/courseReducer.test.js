import { assert } from 'chai';
import {
  selectCourse,
  unSelectCourse,
  fetchCourseSuccess,
} from '../actions/courseActionCreators';
import courseReducer, { initialState, defaultData } from './courseReducer';

describe('courseReducer', () => {
  it('Default state returns an empty array', () => {
    let state = courseReducer({ type: null }, initialState);
    assert.deepEqual(state.toJS(), initialState.toJS());
  });
  it('FETCH_COURSE_SUCCESS returns the data passed', () => {
    let state = courseReducer(fetchCourseSuccess(defaultData), initialState);
    let ids = state.toJS().courses.ids;
    let data = ids.map((id) => state.toJS().courses.data[id]);
    assert.deepEqual(
      data,
      defaultData.map((r) => ({ ...r, isSelected: false }))
    );
  });
  it('SELECT_COURSE returns the data with the right item updated', () => {
    let state = courseReducer(fetchCourseSuccess(defaultData), initialState);
    state = courseReducer(selectCourse(1), state);
    let ids = state.toJS().courses.ids;
    let data = state.toJS().courses.data;
    assert.isTrue(data[ids[1]].isSelected);
  });
  it('UNSELECT_COURSE returns the data with the right item updated', () => {
    let state = courseReducer(fetchCourseSuccess(defaultData), initialState);
    state = courseReducer(selectCourse(1), state);
    state = courseReducer(unSelectCourse(1), state);
    let ids = state.toJS().courses.ids;
    let data = state.toJS().courses.data;
    assert.isFalse(data[ids[1]].isSelected);
  });
});
