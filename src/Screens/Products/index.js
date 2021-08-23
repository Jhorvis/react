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


    /*const [titleProduct1, setTitleProduct1] = useState([]);
    const [priceProduct1, setpriceProduct1] = useState([]);
    const [descriptionProduct1, setdescriptionProduct1] = useState([]);
    const [categoryProduct1, setcategoryProduct1] = useState([]);
    const [imageProduct1, setimageProduct1] = useState([]);


    const [titleProduct2, setTitleProduct2] = useState([]);
    const [priceProduct2, setpriceProduct2] = useState([]);
    const [descriptionProduct2, setdescriptionProduct2] = useState([]);
    const [categoryProduct2, setcategoryProduct2] = useState([]);
    const [imageProduct2, setimageProduct2] = useState([]);*/

    const fetchData = async () => {
        try {
            console.log('entre')
            setIsLoading(true)
            let response = await productService.readAll()
            setAllProducts(response.data)
            setIsLoading(false);
            setIsFetch(true);
            /*setTitleProduct1(response.data[3].title)
            setpriceProduct1(response.data[3].price)
            setdescriptionProduct1(response.data[3].description)
            setcategoryProduct1(response.data[3].category)
            setimageProduct1(response.data[3].image)
            setTitleProduct2(response.data[2].title)
            setpriceProduct2(response.data[2].price)
            setdescriptionProduct2(response.data[2].description)
            setcategoryProduct2(response.data[2].category)
            setimageProduct2(response.data[2].image)
            setIsLoading(false)
            setIsFetch(true)  */   

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
    /*useEffect(() => {  
        if (!isFetch)
            fetchData() 
        else
            console.log(listproducts)
    },[listproducts]
    );
*/
  

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
                        /*
                        /*titleProduct1 = {titleProduct1}
                        priceProduct1 = {priceProduct1}
                        descriptionProduct1 =  {descriptionProduct1}
                        categcategoryProduct1ory = {categoryProduct1}
                        imageProduct1 =  {imageProduct1}
                        titleProduct2 = {titleProduct2}
                        priceProduct2 = {priceProduct2}
                        descriptionProduct2 =  {descriptionProduct2}
                        catecategoryProduct2 = {categoryProduct2}
                        imageProduct2 =  {imageProduct2}   */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                    />
                </>
                }
        </Layouts>

    );
}
export default Products;