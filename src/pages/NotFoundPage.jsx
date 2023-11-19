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

export const NotFoundPage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Ooops!</h1>
    <p style={styles.p}>
    Something went wrong.{' '}
    </p>
    <p style={styles.p}>
    This path is not valid.
    </p>{' '}
    
  </div>
);
