import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode';
import fetch from 'node-fetch';
import StudentListItem from './components/studentListItem';

const url = 'http://localhost:3001';

const generateQRCodes = (students) => Promise.all(
  students.map(async (student) => {
    const { id, first, last } = student;
    const qrCode = await QRCode.toDataURL(student.id);
    return {
      qrCode,
      first,
      last,
      id,
    };
  }),
);

const Admin = ({ students }) => {
  const [qrCodes, setQrCodes] = useState([]);

  useEffect(() => {
    console.log("students", students);
    if (students) {
      generateQRCodes(students).then((codes) => setQrCodes(codes));
    }
  }, [students]);

  return (
    <div>
      <h1>Admin</h1>
      {qrCodes.map((code) => (
        <StudentListItem code={code} />
      ))}
    </div>
  );
};

Admin.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string,
  })).isRequired,
};

Admin.getInitialProps = async () => {
  const res = await fetch(`${url}/students`);
  const json = await res.json();
  return { students: json.students };
};

export default Admin;
