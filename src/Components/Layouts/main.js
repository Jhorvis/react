

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const Main = props => {
    return(
      <React.Fragment>
      <CssBaseline />
      <Container fixed style={{justifyContent: "center", backgroundColor: "#dde1e6", display: "grid"}}>
       {props.children}
      </Container>
    </React.Fragment>
    )
  }
    export default Main;
