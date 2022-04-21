import { assert } from 'chai';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('courseActionCreators', () => {
  it('selectCourse returns the correct action', () => {
    const action = selectCourse();
    assert.equal(action.type, SELECT_COURSE);
  });
  it('unSelectCourse returns the correct action', () => {
    const action = unSelectCourse();
    assert.equal(action.type, UNSELECT_COURSE);
  });
});
