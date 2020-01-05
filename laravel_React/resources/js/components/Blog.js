import React, { Component } from 'react';
import axios from 'axios';

export default class Blog extends Component {

    constructor(){
        super();
        this.state = {
            blogs: []
        }
    }

    componentWillMount() {
        axios.get('/api/blog')
        .then(response => {
            this.setState({
                blogs: response.data
            });
        })
        .catch(error => {
            console.log(errors);
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.blogs.map(blog=> <li>{blog.body}</li>)}
            </div>
        )
    }
}