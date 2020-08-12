import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const PrimaryButton = (props) => {
  const { text } = props;
  return (
    <button type="button" className={styles.primaryButton} {...props}>
      {text}
    </button>
  );
};

const CheckInButton = (props) => {
  const { text } = props;
  return (
    <button type="button" className={styles.checkinButton} {...props}>
      {text}
    </button>
  );
};

const Button = (props) => {
  const { checkIn } = props;
  if (checkIn) {
    return <CheckInButton {...props} />;
  }
  return <PrimaryButton {...props} />;
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
};

CheckInButton.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.propTypes = {
  checkIn: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  checkIn: false,
};

export default Button;
