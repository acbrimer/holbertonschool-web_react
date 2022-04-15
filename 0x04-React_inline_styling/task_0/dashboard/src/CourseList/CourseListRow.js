import React from 'react';
import PropTypes from 'prop-types';

const headerRowStyle = { color: '#deb5b545' };
const rowStyle = { color: '#f5f5f5ab' };

const CourseListRow = (props) => {
  const { isHeader, textFirstCell, textSecondCell } = props;

  return (
    <tr style={isHeader ? headerRowStyle : rowStyle}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        ) : (
          <th colSpan={2}>{textFirstCell}</th>
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
