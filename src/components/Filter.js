import React, { Component } from 'react'
import './Filter.css'

export default class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <b>{this.props.count} Products found </b>
                </div>
                <div className="col-md-4">
                   <b> Order by</b>
                    <select style={{width:'200px'}} onChange={this.props.handleChangeSort} className="form-control" value={this.props.sort} >
                            <option value=""> Order </option>
                            <option value="lowest"> Lowest to highest </option>
                            <option value="highest"> Heighest to lowest </option>
                    </select>
                </div>

                <div className="col-md-4">
                    <b>Filter size</b>
                    <select style={{width:'80px'}} onChange={this.props.handleChangeSize}  className="form-control"  value={this.props.size}>
                        <option value="">Size</option>
                        <option value="all">ALL</option>
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
