import React, { Component } from 'react'
import './Basket.css'
import {removeFromCart, fetchCartItems,reduceQuantity,increaseQuantity} from '../acions/CartActions'
import { connect } from 'react-redux'

class Basket extends Component {

    componentDidMount(){
        this.props.fetchCartItems()
    }

    render() {
        const {cartItems} = this.props

        return (
            <div style={{minHeight:'20px' , width:'380px'}} className="alert alert-info">
                <h4 style={{textAlign:'center'}}> Basket </h4>
                <p style={{textAlign:'center'}}><b> {cartItems.length === 0 ? 'Basket is empty' : 'You have '+cartItems.length+' items in your basket' }</b></p>
                {cartItems.length > 0 && 
                    <div>
                        {
                            cartItems.map(item => {
                               return  <div className="main"><b>{item.count} {item.title} </b>
                                            <div className="buttons">
                                                <button style={{backgroundColor:'#e48d41'}} onClick={(e) => {this.props.removeFromCart(item, this.props.cartItems)}} >X</button>
                                                <button style={{backgroundColor:'#e48d41'}} onClick={(e) => this.props.increaseQuantity(item, this.props.cartItems)}>+</button>
                                                <button style={{backgroundColor:'#e48d41'}} onClick={(e) => this.props.reduceQuantity(item, this.props.cartItems)}>-</button>
                                            </div>
                                        </div>

                            })
                        }

                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({cartItems: state.cart.cartItems})

export default connect(mapStateToProps,{removeFromCart, fetchCartItems,reduceQuantity,increaseQuantity})(Basket)