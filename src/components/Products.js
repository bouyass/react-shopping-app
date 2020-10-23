import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../Util";
import { addToCart } from "../acions/CartActions";
import { fetchProducts } from "../acions/ProductActions";
import './Products.css'

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map((product) => (
      <div style={{backgroundColor:'#3b3938' , marginRight:'10px', marginBottom:'10px', color:'#fff'}} className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          <a style={{textDecoration:'none', color:'#fff'}}
            href={`#${product.id}`}
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >
            <img  src={`products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <b>{util.formatCurrency(product.price)}</b>
          <button
            className="btn btn-primary"
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.cartItems,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);