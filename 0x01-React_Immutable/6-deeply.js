import { Map } from 'immutable';

export default function (page1, page2) {
  return Map(page1).mergeDeep(page2);
}
