import Product from './product';
import React from 'react'


const ListProducts = props => {

    /*<Product
                title={p.title}
                price={p.price}
                description={p.description}
                category={p.category}
                image={p.image}
                /> */
           


          

    const ViewProduct  = () => {
        return props.products.map (  (p) =>{     
                return(
                <Product
                title={p.title}
                price={p.price}
                description={p.description}
                category={p.category}
                image={p.image}
                id = {p.id}
                />
    
                );
            })
       
    }
    return (
        <>
            <ViewProduct/>
        </>
    )
}

export default ListProducts;