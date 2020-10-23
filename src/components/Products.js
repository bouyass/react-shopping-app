import React, { Component } from 'react'
import Util from '../Util'

export default class Products extends Component {

    constructor(props){
        super(props)
    }

    render() {
        const productItems = this.props.products.map((product) => (
          <div style={{backgroundColor:'#fff',marginBottom:'25px', marginLeft:'20px',height:'400px',}} key={product.id} className="col-lg-3" key={product.id}>
            <div className="thumbnail  text-center">
              <a style={{textDecoration:'none', color:'#000', fontFamily:"Franklin Gothic Medium", fontSize:'1.2em'}}
                href={`#${product.id}`}
                onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
              >
                <img style={{width:'100%', height:'30%', maxHeight:'250px'}} src={`products/${product.sku}_2.jpg`} alt={product.title} />
                <p>{product.title}</p>
              </a>

            <b style={{color:'#000'}}>  {Util.formatCurrency(product.price)} </b>&nbsp;&nbsp;
            <button style={{marginTop:'0%'}} className="btn btn-dark"
                onClick={(e) => this.props.handleAddToCard(e, product)}
            >
                Add to cart
            </button>
             
            </div>
          </div>
        ));
    
        return <div className="row">{productItems}</div>;
      }
}

