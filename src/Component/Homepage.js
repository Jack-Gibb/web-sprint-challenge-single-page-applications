import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <h1>Ogre's Pizza Smash</h1>
            <Link to="/pizza" id="order-pizza">
                Order Here!
            </Link>
        </div>
    );
}

export default Homepage;