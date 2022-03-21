import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';

const CourseList = (props) => {
  const { listCourses } = props;
  return (
    <table key="course-list" id="course-list" className="tbl-CourseList">
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" />
        <CourseListRow
          isHeader
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <tr>
            <td>No course available yet</td>
          </tr>
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={`course-${course.id}`}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
