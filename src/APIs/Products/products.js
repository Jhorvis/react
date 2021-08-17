import React from 'react'

class Products extends React.Component {
    constructor (props){
        super(props)
    
        this.state = {
        products: [],
        isFetch: true
        }
    }
    componentDidMount () {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(productsJson => this.setState({products: productsJson, isFetch: false}))
    }
    render(){
        if (this.state.isFetch){
            return 'Loading...'
        }
        const title = this.state.products[2].title
        const price = this.state.products[2].price
        const description = this.state.products[2].description
        const category = this.state.products[2].category
        const image = this.state.products[2].image
        return <ul>
                    <li>{title}</li>
                    <li>{price}</li>
                    <li>{description}</li>
                    <li>{category}</li>
                    <li>{image}</li>
               </ul>;
    }

    
}

export default Products