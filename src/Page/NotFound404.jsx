import React from "react";
import "./NotFound404.css";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <div className="notfound-smiley">{":("}</div>
        <h1>ERROR: 404_PAGE_NOT_FOUND</h1>
        <p>Looks like you sh... oops, sorry, got lost!</p>
        <Link to='/' className="notfound-link">Home page</Link>
      </div>
    </div>
  );
};

export default NotFound404;
