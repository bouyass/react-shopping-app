import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products'
import Filter from './components/Filter'
import Basket from './components/Basket'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      products: [],
      filteredProducts: [],
      cartItems: []
    }
    this.handleAddToCard = this.handleAddToCard.bind()
    this.handleChangeSort = this.handleChangeSort.bind()
    this.listProducts = this.listProducts.bind()
    this.handleChangeSize = this.handleChangeSize.bind()
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind()
    this.handleDecrementCount = this.handleDecrementCount.bind()
    this.handleIncrementCount = this.handleIncrementCount.bind()
  }

  handleAddToCard = (e, product) => {
      e.preventDefault()
      this.setState(state => {
        const cartItems = state.cartItems;
        let productsalreadyInCart = false
        cartItems.forEach(item => {
          if(item.id === product.id){
            productsalreadyInCart = true
            item.count++
          }
        })
        if(!productsalreadyInCart){
          cartItems.push({...product, count:1})
        }
        localStorage.setItem('items',JSON.stringify(cartItems))
        return cartItems
      })
  }

  listProducts = () => {
    this.setState(state => {
      if(state.sort !== ''){
          state.products.sort((a,b) => (state.sort === 'lowest') ? (a.price > b.price) : (a.price < b.price))
      }else{
        state.products.sort((a,b) => (a.id < b.id ? 1 : -1))
      }
      
      if(state.size !== '' && state.size !== 'all'){
          return {filteredProducts: state.products.filter(item => item.availableSizes.includes(state.size.toUpperCase()))}
      }else if(state.size === 'all'){
          
          return {filteredProducts: state.products}
      }
      
      return {filteredProducts: state.products}
    })
  }

  handleChangeSort = (e) => {
    this.setState({
      sort: e.target.value
    })
    this.listProducts()
  }

  handleChangeSize = (e) => {
    this.setState({
      size: e.target.value
    })
    this.listProducts()
  }

  handleRemoveFromCart = (e, product) => {
    const cartItems = this.state.cartItems
    this.setState(state => {
        cartItems.map((item, index) => {
        if(item.id === product.id){
          state.cartItems.splice(index,1)
        }
      })
      localStorage.setItem('items',JSON.stringify(cartItems))
      return {cartItems}
    })
  }

  handleIncrementCount = (e,product) => {
    const cartItems = this.state.cartItems
    this.setState(state => {
      cartItems.map((item) => {
      if(item.id === product.id){
         item.count++
      }
    })
    localStorage.setItem('items',JSON.stringify(cartItems))
    return {cartItems}
  })
  }

  handleDecrementCount = (e,product) => {
    const cartItems = this.state.cartItems
    this.setState(state => {
      cartItems.map((item, index) => {
        console.log(product)
      if(item.id === product.id){
        if(item.count > 0){
          item.count--
          if(item.count === 0 ){
            state.cartItems.splice(index,1)
          }
        }
      }
    })
    localStorage.setItem('items',JSON.stringify(cartItems))
    return {cartItems}
  })
  }

  
  componentDidMount = () => {
    fetch('http://localhost:8000/products')
          .then(response => response.json())
          .then(data => {
            this.setState({
              products: data,
              filteredProducts: data
            })
          })
      this.setState({
        cartItems: JSON.parse(localStorage.getItem('items'))
      })
  }

  render(){
    return (
      <div className="container">
        <h1 style={{color:'#fff'}}>REACT SHPPING APPLICATION</h1>
        <hr style={{borderTop: '0.5px solid #fff'}} />
        
          <div className="shop">
            <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize} 
                    handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.length}/>
            <hr style={{borderTop: '0.5px solid #fff'}}  />
            
            <div className="secondContainer"> 
            <Products products={this.state.filteredProducts}  handleAddToCard={this.handleAddToCard} />
            <div><Basket className="basket" handleIncrementCount={this.handleIncrementCount}  handleDecrementCount={this.handleDecrementCount} cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} /></div>
          </div>
      </div>
      </div>
    );
  }
  
}

export default App;
