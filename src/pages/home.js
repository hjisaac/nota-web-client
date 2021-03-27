import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Navigation from "../components/Navigation"; 
import Button from "../components/Button";

const Home = () => {
    return (
        <div>
            <p>This is the Home page</p>
            <Button>Click me!</Button>
        </div>
    );
};

export default Home;