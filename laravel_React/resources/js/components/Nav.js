import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

export default function Nav() {

    const navStyle = {
        color: "white"
    };

    return (
        <nav>
            <ul className="nav-links">
                <Link to="/" style={navStyle} >
                    <li>Home</li>
                </Link>
                <Link to="/tasks" style={navStyle} >
                    <li>Task</li>
                </Link>
                <Link to="/blog" style={navStyle} >
                    <li>Blog</li>
                </Link>
                <Link to="/example" style={navStyle} >
                    <li>Example</li>
                </Link>
                <Link to="/product" style={navStyle} >
                    <li>Product</li>
                </Link>             
            </ul>
        </nav>
    )
}


