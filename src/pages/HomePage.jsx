import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 20,
    textAlign: 'center',
    color: '#2e7d32',
  },
  p: {
    fontSize: 16,
    textAlign: 'center',
  },
};

export const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Contact Book​ application</h1>
    <p style={styles.p}>
      It's your personal contacts list.{' '}
    </p>
    <p style={styles.p}>
      It allows to save phone contacts to personal database, edit and delete
      contacts from it.
    </p>{' '}
    
  </div>
);
