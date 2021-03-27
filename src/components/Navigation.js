import React from "react";
import { Link } from "react-router-dom";

const Navigation = () =>  {
    return (
        <nav>
            <ul>
                <li>
                    <span aria-hidden="true" role="img">🏦</span>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <span aria-hidden="true" role="img">🔖</span>
                    <Link to="/mynotes"> My Notes </Link>
                </li>
                <li>
                    <span aria-hidden="true" role="img">🌟</span>
                    <Link to="/favorites"> Favorites </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;