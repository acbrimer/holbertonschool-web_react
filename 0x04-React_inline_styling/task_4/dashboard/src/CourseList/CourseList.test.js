import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('<CourseList />', () => {
  it('CourseList renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('CourseList renders 5 rows', () => {
    const courseList = shallow(<CourseList listCourses={listCourses} />);
    assert.equal(courseList.find(CourseListRow).length, 5);
  });

  it('CourseList renders correct empty text', () => {
    const courseList = shallow(<CourseList />);
    assert.equal(courseList.find(CourseListRow).length, 2);
    assert.isTrue(courseList.text().includes('No course available yet'));
  });
});
