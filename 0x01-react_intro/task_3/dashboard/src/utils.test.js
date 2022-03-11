import { getFullYear, getLatestNotification, getFooterCopy } from './utils';
import { assert } from 'chai';

describe('Util functions tests', () => {
  it('Test getFullYear() - current year 2022', () => {
    assert.equal(getFullYear(), 2022);
  });
  it('Test getLatestNotification()', () => {
    assert.equal(
      getLatestNotification(),
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
  it('Test getFooterCopy(1)', () => {
    assert.equal(getFooterCopy(1), 'Holberton School');
  });
  it('Test getFooterCopy(0)', () => {
    assert.equal(getFooterCopy(0), 'Holberton School main dashboard');
  });
});
