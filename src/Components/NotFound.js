import React from 'react';
import { Link } from 'react-router-dom'; 

const NotFound = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, that page doesn't exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;