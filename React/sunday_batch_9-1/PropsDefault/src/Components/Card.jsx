import React from 'react';

// Functional Component
const UserCard = ({ name, email, role }) => {
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

// Default Props
UserCard.defaultProps = {
  name: 'Anonymous User',
  email: 'Not Provided',
  role: 'Viewer',
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
