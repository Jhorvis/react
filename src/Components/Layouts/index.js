import React from 'react';
import Main from './main';
import Title from './title';
import { Helmet } from 'react-helmet';
const Layouts = props => {

    return(
        
         <Main>
            <Helmet>
                <title>{props.title +" | "+process.env.REACT_APP_APP_NAME}</title>
            </Helmet>
            <Title
                name={props.title}
            />
            {props.children}
         </Main> 
    );
}

export default Layouts;