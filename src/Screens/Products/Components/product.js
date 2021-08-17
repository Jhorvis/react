import React from 'react'


const Product = props => {
    return (
    <ul>
        <li>{props.title}</li>
        <li>{props.price}</li>
        <li>{props.description}</li>
        <li>{props.category}</li>
        <li>{props.image}</li>
    </ul>
    )
}

export default Product