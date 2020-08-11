import Head from 'next/head';
import React, {useState} from 'react';
import cookie from 'js-cookie';
import fetch from 'node-fetch';
import { PrimaryButton } from './components/button';
import styles from '../styles/Login.module.css';

const url = 'http://localhost:3001';

const login = (email, password) => {
  fetch(`${url}/login`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((user) => {
    console.log(user);
  }).catch((err) => {
    console.log(err);
  });
};

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <div>
      <Head>
        <title>Crosswalk | Login</title>
      </Head>
      <main className={styles.container}>
        <h1>Crosswalk</h1>
        <input
          type="text"
          placeholder="Email"
          className={styles.textInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          className={styles.textInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PrimaryButton text="Login" onClick={() => login(email, password)} />
      </main>
    </div>
  );
}
