import React from 'react';
import Main from './main';
import Title from './title';
const Layouts = props => {
    return(
         <Main>
            <Title
                name={props.title}
            />
            {props.children}
         </Main> 
    );
}

export default Layouts;