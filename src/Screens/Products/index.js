import Layouts from '../../Components/Layouts/index'
import ListProducts from './Components/listProducts';
import React,{ useState, useEffect } from 'react';

/// USE STATE ES PARA CREAR METODOS GET AND SET 
// USE EFFECT ES PARA HOOK ... ESTO SUCEDE ANTES DE EJECUTARSE EL CODIGO

import productService from '../../APIs/Products/product.services'

const Products = props => {



    const [isLoading, setIsLoading] = useState(false);
    const [isFetch,setIsFetch] =  useState(false);
    const [title,setTitle] = useState('Productos')

    const [allproducts, setAllProducts] = useState([]);


    const fetchData = async () => {
        try {
            setIsLoading(true)
            let response = await productService.readAll()
            setAllProducts(response.data)
            setIsLoading(false);
            setIsFetch(true); 

        }
        catch (error) {
            console.error(error);
        }
    }



    useEffect( () => {  
        if (!isFetch){
            fetchData()
        }
    },[]);
  

    return (
        <Layouts
                title ={title} 
            >
            {isLoading ?
                <p>Cargando ... </p> 
                :
                <> 
                    <ListProducts
                        products = {allproducts}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                    />
                </>
                }
        </Layouts>

    );
}
export default Products;