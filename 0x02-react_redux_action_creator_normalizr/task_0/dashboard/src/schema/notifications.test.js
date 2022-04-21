import { assert } from 'chai';
import { getAllNotificationsByUser } from './notifications';

describe('notifications.json', () => {
  it('getAllNotificationsByUser with id 5debd764a7c57c7839d722e9 returns correct value', () => {
    const expectedGuids = [
      '280913fe-38dd-4abd-8ab6-acdb4105f922',
      '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
    ];
    const n = getAllNotificationsByUser('5debd764a7c57c7839d722e9');
    assert.isArray(n);
    assert.equal(n.length, 2);
    assert.isTrue(n.map((r) => r.guid).includes(expectedGuids[0]));
    assert.isTrue(n.map((r) => r.guid).includes(expectedGuids[1]));
  });
});
