import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home";
import Favorites from "./favorites";
import MyNotes from "./mynotes";
import Layout from "../components/Layout";
import NotePage from "../pages/note";
import SignUp from "./signup";
import signIn from "./signin";

const Pages = () => {
    return (    
        <Router>
            {/* wrap our routes withing the Layout component */}
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/mynotes" component={MyNotes} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/note/:id" component={NotePage} />
                <Route path="/signup" component={SignUp}/>
                <Route path="/signin" component={signIn}/>
            </Layout>

        </Router>
    );
};

export default Pages;