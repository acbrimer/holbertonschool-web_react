import { Map } from 'immutable';

export default mergeDeeplyElements = (page1, page2) =>
  Map(page1).mergeDeep(Map(page2));
