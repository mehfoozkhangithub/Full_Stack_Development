import React from 'react';

/* const UserCard = ({
  name = 'Anonymous User',
  email = 'Not Provided',
  role = 'Viewer',
}) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  );
};
 */

// Functional Component
const UserCard = ({
  name = 'Anonymous User',
  email = 'Not Provided',
  role = 'Viewer',
}) => {
  console.log('-> name:', name);
  console.log('-> role:', role);
  console.log('-> email:', email);
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  );
};

// Some basic inline styling for demo
const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '10px',
    marginBottom: '12px',
    width: '300px',
    color: 'black',
    backgroundColor: '#f9f9f9',
  },
};

export default UserCard;
