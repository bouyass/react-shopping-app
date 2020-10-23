import React, { Component } from 'react'
import {filterProductsBySize, sortItems} from '../acions/ProductActions'
import {connect} from 'react-redux'
import './Filter.css'

class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <b>{this.props.count} Products found </b>
                </div>
                <div className="col-md-4">
                   <b> Order by</b>
                    <select style={{width:'200px'}} onChange={(e) => {this.props.sortItems(e.target.value, this.props.products)}} className="form-control" value={this.props.sort} >
                            <option value=""> Order </option>
                            <option value="lowest"> Lowest to highest </option>
                            <option value="highest"> Heighest to lowest </option>
                    </select>
                </div>

                <div className="col-md-4">
                    <b>Filter size</b>
                    <select style={{width:'80px'}} onChange={(e) => {this.props.filterProductsBySize(e.target.value, this.props.products)}}  className="form-control"  value={this.props.size}>
                        <option value="">Size</option>
                        <option value="">ALL</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products.items, 
    filteredProducts: state.products.filteredProducts,
    size: state.products.size,
    sort:state.products.sort
})

export default connect(mapStateToProps,{filterProductsBySize,sortItems})(Filter)