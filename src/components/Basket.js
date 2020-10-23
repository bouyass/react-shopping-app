import React, { Component } from 'react'
import './Basket.css'

export default class Basket extends Component {
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
                                            <div className="buttons"><button style={{backgroundColor:'#e48d41'}} >X</button> <button style={{backgroundColor:'#e48d41'}}>+</button><button style={{backgroundColor:'#e48d41'}}>-</button></div>
                                        </div>

                            })
                        }

                    </div>
                }
            </div>
        )
    }
}
