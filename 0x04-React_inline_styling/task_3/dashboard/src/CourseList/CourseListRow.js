import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  tblCourseList_th: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
    textAlign: 'left',
  },
});

const headerRowStyle = { color: '#deb5b545' };
const rowStyle = { color: '#f5f5f5ab' };

const CourseListRow = (props) => {
  const { isHeader, textFirstCell, textSecondCell } = props;

  return (
    <tr style={isHeader ? headerRowStyle : rowStyle}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(styles.tblCourseList_th)}>{textFirstCell}</th>
            <th className={css(styles.tblCourseList_th)}>{textSecondCell}</th>
          </>
        ) : (
          <th className={css(styles.tblCourseList_th)} colSpan={2}>
            {textFirstCell}
          </th>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
