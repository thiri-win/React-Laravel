import React, { Component } from 'react'

export default class ProductInput extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <input
                        className="form-control"
                        placeholder="Enter Your Product"
                        required
                        />
                    </div>
                    <button 
                    type="submit"
                    className="btn btn-primary"
                    >
                        Create Product
                    </button>
                </form>
            </div>
        )
    }
}
