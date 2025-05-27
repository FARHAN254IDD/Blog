import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Blog Post</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create">new Blog</Link>
            
            </div>
        </nav>
    
    );
}

export default Navbar;