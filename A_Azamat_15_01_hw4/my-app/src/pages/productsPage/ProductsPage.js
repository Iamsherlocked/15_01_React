import PortfolioPage from "../portfolioPage/PortfolioPage";
import React from "react";
import ProductList from "../../components/productList/ProductList";


class ProductsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {products: [], input: ""}
    }

    getProducts = () => {
        this.setState({products: ["Apple", "orange", "apricot", ...this.state.products]})
    }

    changeInput = (e) => {
        this.setState({input: e.target.value})
    }


    addProduct = () => {
        this.setState({products: [...this.state.products, this.state.input]})
    }

    deleteProduct = () => {
        this.setState({products: []})
    }



    render() {
        return (

            <div>
                <h1>Products</h1>
                <input type="text" onChange={this.changeInput} />
                <button onClick={this.getProducts}>get products</button>
                <button onClick={this.addProduct} >Add product</button>
                <button onClick={this.deleteProduct}>Delete</button>
                <ProductList productList={this.state.products}/>
            </div>
        )

    }
}

export default ProductsPage;