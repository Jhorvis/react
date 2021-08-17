import Main from '../../Components/main'
import Title from '../../Components/title'
import Product from './Components/product';
import React,{ useState, useEffect } from 'react';
/// USE STATE ES PARA CREAR METODOS GET AND SET 
// USE EFFECT ES PARA HOOK ... ESTO SUCEDE ANTES DE EJECUTARSE EL CODIGO

import productService from '../../APIs/Products/product.services'

const Products = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [isFetch,setIsFetch] =  useState(false);
    const [title,setTitle] = useState('Productos')

    //const [listproducts, setListProducts] = useState([]);
    const [titleProduct1, setTitleProduct1] = useState([]);
    const [priceProduct1, setpriceProduct1] = useState([]);
    const [descriptionProduct1, setdescriptionProduct1] = useState([]);
    const [categoryProduct1, setcategoryProduct1] = useState([]);
    const [imageProduct1, setimageProduct1] = useState([]);


    const [titleProduct2, setTitleProduct2] = useState([]);
    const [priceProduct2, setpriceProduct2] = useState([]);
    const [descriptionProduct2, setdescriptionProduct2] = useState([]);
    const [categoryProduct2, setcategoryProduct2] = useState([]);
    const [imageProduct2, setimageProduct2] = useState([]);

    const fetchData = async () => {
        try {
            setIsLoading(true)
            let response = await productService.getAll()
            //setListProducts(response)
            setTitleProduct1(response[1].title)
            setpriceProduct1(response[1].price)
            setdescriptionProduct1(response[1].description)
            setcategoryProduct1(response[1].category)
            setimageProduct1(response[1].image)
            setTitleProduct2(response[2].title)
            setpriceProduct2(response[2].price)
            setdescriptionProduct2(response[2].description)
            setcategoryProduct2(response[2].category)
            setimageProduct2(response[2].image)
            setIsLoading(false)
            setIsFetch(true)

        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {  
        if (!isFetch){
            fetchData()
        } 
    },[]);
    /*useEffect(() => {  
        if (!isFetch)
            fetchData() 
        else
            console.log(listproducts)
    },[listproducts]
    );
*/
  

    return (


        <Main>

            <Title
                name={title}
            />

            {isLoading ?
                <p>Cargando ... </p> 
                :
                <> 
                    <Product
                        title = {titleProduct1}
                        price = {priceProduct1}
                        description =  {descriptionProduct1}
                        category = {categoryProduct1}
                        image =  {imageProduct1}
                    />
                    <Product
                        title = {titleProduct2}
                        price = {priceProduct2}
                        description =  {descriptionProduct2}
                        category = {categoryProduct2}
                        image =  {imageProduct2}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                    />
                </>
                }
        </Main>

    );
}
// EXPORT PRODUCT
export default Products;