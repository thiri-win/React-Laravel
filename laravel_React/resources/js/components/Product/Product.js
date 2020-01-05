import React, { Component } from 'react';
import ProductInput from './ProductInput';

export default class Product extends Component {
    render() {
        return (
            <div className="container">
                <ProductInput />
            </div>
        )
    }
}
