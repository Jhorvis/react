import React from 'react'
import Cardview from './cardView'


const Product = props => {

    const Methodedit = () =>{
        console.log('Yo edito los datos');
        alert('Editando los datos');
    }

    const Methoddel = () =>{
        console.log('Yo borro todo');
        alert('Dato eliminado');
    }

    return (

        <Cardview
            title = {props.title}
            price = {props.price}
            description =  {props.description}
            category = {props.category}
            image =  {props.image}
            buttondel = {Methoddel}
            buttonedit = {Methodedit}
        />
    
    )
}

export default Product