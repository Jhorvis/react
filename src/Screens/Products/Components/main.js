import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function SimpleContainer(props) {
  return (

    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{justifyContent: "center", backgroundColor: "#dde1e6", display: "grid"}}>
       {props.children}
      </Container>
      
    </React.Fragment>
  );
}