import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySection: {
    marginBottom: 40,
  },
});

const BodySection = (props) => {
  const { title, children } = props;
  return (
    <div className={css(styles.bodySection)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BodySection;
