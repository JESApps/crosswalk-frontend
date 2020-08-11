import Head from 'next/head'
import { useRouter } from 'next/router';
import fetch from 'node-fetch';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import styles from '../styles/Home.module.css'

const url = 'http://localhost:3001';

const Crosswalk = ({ user }) => {
  const [students, setStudents] = useState([]);
  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/login');
  //   }
  // });

  useEffect(() => {
    const socket = socketIOClient(url);
    socket.on('studentAdded', (student) => {
      setStudents(students.concat([student]));
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Crosswalk</h1>
      <div className={styles.pickupContainer}>
        {students.map((student) => (
          <p>{student}</p>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // const res = await fetch('https://localhost:3001/login');
  // const user = await res.json();
  const user = null;

  return { props: { user } };
}

Crosswalk.propTypes = {
  user: PropTypes.shape.isRequired,
};

export default Crosswalk;
