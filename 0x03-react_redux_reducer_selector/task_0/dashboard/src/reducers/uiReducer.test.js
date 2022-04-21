import { assert } from 'chai';
import { SELECT_COURSE } from '../actions/courseActionTypes';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import uiReducer, { initialState } from './uiReducer';

describe('uiReducer', () => {
  it('State does not change with no action type dispatched', () => {
    assert.equal(uiReducer({ type: null }, initialState), initialState);
  });
  it('State does not change with SELECT_COURSE action', () => {
    assert.deepEqual(
      uiReducer({ type: SELECT_COURSE }, initialState),
      initialState
    );
  });
  it('isNotificationDrawerVisible is true after DISPLAY_NOTIFICATION_DRAWER action', () => {
    const state = uiReducer(
      { type: DISPLAY_NOTIFICATION_DRAWER },
      initialState
    );
    assert.isTrue(state.isNotificationDrawerVisible);
  });
});
