import axios from '../axios';


const productService = {


// CRUD 
// CREATE
// READ
// UPDATE
// DELETE


async create (titleP,priceP,descriptionP,imageP,categoryP) {
  let body  = {
    title: titleP,
    price: priceP,
    description: descriptionP,
    image: imageP,
    category: categoryP
  }
  console.log(axios.baseURL)
  return await  axios.post('/products',body);
},

async readAll(){
  return await axios.get('/products')
},
async read(id){
  return await axios.get('/readProduct/'+id)
},
async update(body,id){
  return await axios.put('/updateProduct/'+id,body)
},
async update(id){
  return await axios.delete('/deleteProduct/'+id)
},


async getAll (){
    const response = await fetch('https://fakestoreapi.com/products')
    const products = await response.json();
    return products
}

}

export default productService;