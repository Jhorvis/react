
import React,{ useState } from 'react';
import Layouts from '../../Components/Layouts/index'


const Sales = props => {
    const [title,setTitle] = useState('Ventas')

    return (
        <Layouts
        title ={title} 
    >

        <p> SALES </p> 
</Layouts>);
}
export default Sales;