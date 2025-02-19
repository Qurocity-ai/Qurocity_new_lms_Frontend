import { Height } from '@mui/icons-material';
import React from 'react';

const UnderDevelopmentCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.cardContent}>
        {/* <h2 style={styles.title}>We are working on it</h2>
        <p style={styles.message}>This part is under development. Stay tuned!</p> */}
        <img style={styles.img} src="./assets/UnderC.jpg" alt="underConstruction" />
        {/* <h2 style={styles.title}> Stay tuned ....</h2> */}
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '250px',
    
    borderRadius: '10px',
    // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    // backgroundColor: '#f7f7f7',
    padding: '20px',
    margin: '20px auto',
    textAlign: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    // marginBottom: '10px',
  },
  message: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.5',
  },
  img: {
    width:'600px',
    Height: '500px',
  }

};

export default UnderDevelopmentCard;
