import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
  it('CourseList renders without crashing', () => {
    shallow(<CourseList />);
  });
  it('CourseList renders 5 rows', () => {
    const courseList = shallow(<CourseList />);
    assert.equal(courseList.find(CourseListRow).length, 5);
  });
});
