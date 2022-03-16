import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';

const CourseList = () => {
  return (
    <table key="course-list" id="course-list" className="tbl-CourseList">
      <thead>
        <CourseListRow
          isHeader
          textFirstCell="Available courses"
          textSecondCell="Course name"
        />
      </thead>
      <tbody>
        <CourseListRow textFirstCell="ES6" textSecondCell="60" />
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" />
        <CourseListRow textFirstCell="React" textSecondCell="40" />
      </tbody>
    </table>
  );
};

export default CourseList;
