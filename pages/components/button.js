import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

export const PrimaryButton = (props) => {
  const { text } = props;
  return (
    <button type="button" className={styles.primaryButton} {...props}>
      {text}
    </button>
  );
};

export const CheckinButton = (props) => {
  const { text } = props;
  return (
    <button type="button" className={styles.checkinButton} {...props}>
      {text}
    </button>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
};

CheckinButton.propTypes = {
  text: PropTypes.string.isRequired,
};
