import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  tblCourseList_th: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
    textAlign: 'left',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

const headerRowStyle = { color: '#deb5b545' };
const rowStyle = { color: '#f5f5f5ab' };

const CourseListRow = (props) => {
  const { isHeader, textFirstCell, textSecondCell } = props;

  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <tr
      className={clsx({ [css(styles.rowChecked)]: checked })}
      style={isHeader ? headerRowStyle : rowStyle}
    >
      {isHeader ? (
        textSecondCell ? (
          <>
            <th></th>
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
          <th>
            <input type="checkbox" onChange={toggleChecked} />
          </th>
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
