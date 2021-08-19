import React from 'react'
import Cardview from '../../../Components/cardView'


const Product = props => {

    return (

        <Cardview
            title = {props.title}
            price = {props.price}
            description =  {props.description}
            category = {props.category}
            image =  {props.image}
        />
    
    )
}

export default Product