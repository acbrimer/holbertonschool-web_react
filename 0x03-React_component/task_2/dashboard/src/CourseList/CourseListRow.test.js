import React from 'react';
import { assert } from 'chai';
import { shallow } from '../../config/setupTests';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('Renders thead w/ colspan = 2 if isHeader & no textSecondCell', () => {
    const row = shallow(
      <CourseListRow isHeader textFirstCell="First Header" />
    );
    assert.equal(row.find('th').length, 1);
  });
  it('Renders thead w/ colspan = 2 if isHeader & textSecondCell', () => {
    const row = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="First Header"
        textSecondCell="Second Header"
      />
    );
    assert.equal(row.find('th').length, 2);
  });
  it('Renders tr w/ 2 td elements if not header', () => {
    const row = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="First Cell"
        textSecondCell="Second Cell"
      />
    );
    assert.equal(row.find('td').length, 2);
  });
});
