import { assert } from 'chai';
import { SELECT_COURSE } from '../actions/courseActionTypes';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import uiReducer, { initialState } from './uiReducer';

describe('uiReducer', () => {
  it('State does not change with no action type dispatched', () => {
    assert.deepEqual(
      uiReducer(initialState, { type: null }).toJS(),
      initialState.toJS()
    );
  });
  it('State does not change with SELECT_COURSE action', () => {
    assert.deepEqual(
      uiReducer(initialState, { type: null }).toJS(),
      initialState.toJS()
    );
  });
  it('isNotificationDrawerVisible is true after DISPLAY_NOTIFICATION_DRAWER action', () => {
    const state = uiReducer(initialState, {
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
    assert.isTrue(state.get('isNotificationDrawerVisible'));
  });
});
