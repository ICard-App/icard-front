import React from 'react';

export function Error404() {
  const styles = {
    wrapper: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: '5em',
      marginBottom: '20px',
      textShadow: '3px 3px 0 #008080',
    },
    subtitle: {
      fontSize: '2em',
      textAlign: 'center',
      marginBottom: '40px',
    },
    gifContainer: {
      position: 'relative',
      width: '250px',
      height: '250px',
    },
    gif: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '5px solid #008080',
      boxShadow: '3px 3px 0 #008080',
      position: 'absolute',
      top: '0',
      left: '0',
      animation: 'rotate 3s linear infinite',
    },
    button: {
      backgroundColor: '#008080',
      color: '#fff',
      padding: '10px 20px',
      fontSize: '1.2em',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    buttonHover: {
      backgroundColor: '#006666',
    },
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Oops!</h1>
      <p style={styles.subtitle}>Parece que la página que estás buscando no existe.</p>
      <div style={styles.gifContainer}>
        <img style={styles.gif} src="https://media4.giphy.com/media/UHAYP0FxJOmFBuOiC2/giphy.gif?cid=ecf05e47r68e6ez9rzyyxjtthbtstw3pmmgmwpdjvyuuw5ty&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Error 404 gif" />
      </div>
      <a style={styles.button} href="/">Volver a inicio</a>
    </div>
  );
}

