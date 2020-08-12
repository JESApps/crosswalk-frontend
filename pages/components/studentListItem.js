import React from 'react';
import PropTypes from 'prop-types';

const StudentListItem = ({ code }) => (
  <div>
    <img src={code.qrCode} alt={code.id} />
    <p>
      {`${code.first} ${code.last}`}
    </p>
  </div>
);

StudentListItem.propTypes = {
  code: PropTypes.shape({
    qrCode: PropTypes.shape,
    id: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string,
  }).isRequired,
};

export default StudentListItem;
