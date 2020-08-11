import React, { useCallback } from 'react';
import Head from 'next/head';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import fetch from 'node-fetch';

const url = 'http://localhost:3001';

const CSVUpload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      Papa.parse(file, {
        skipEmptyLines: true,
        complete: (results) => {
          const students = [];
          results.data.forEach((student) => {
            students.push({
              first: student[1].trim(),
              last: student[0].trim(),
            });
          });
          fetch(`${url}/csv_upload`, {
            method: 'POST',
            body: JSON.stringify({
              students,
            }),
          });
        },
      });
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <Head>
        <title>Crosswalk | CSV Upload</title>
      </Head>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive
          ? <p>Drop CSV files here</p>
          : <p>Drag and drop</p>}
      </div>
    </div>
  );
};

export default CSVUpload;
