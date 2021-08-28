import React from 'react'
import CardView from '../../../Components/cardView'


const Product = props => {


    const onEdit = () =>{
        console.log('Yo edito los datos de producto : '+props.id);
        
    }

    const onDelete = () =>{
        console.log('Yo borro los datos de  producto : '+props.id);
        alert('Dato eliminado id: '+props.id);
    }

    return (
        
        <CardView
            title = {props.title}
            price = {props.price}
            description =  {props.description}
            category = {props.category}
            image =  {props.image}
            buttondel = {onDelete}
            buttonedit = {onEdit}
        />
        

    )
}

export default Product