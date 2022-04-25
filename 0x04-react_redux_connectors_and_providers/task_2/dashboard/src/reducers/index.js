import { combineReducers } from 'redux';
import ui from './uiReducer';

const reducer = combineReducers({
  ui,
});

export default reducer;
