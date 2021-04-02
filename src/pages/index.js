import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import Home from "./home";
import Favorites from "./favorites";
import MyNotes from "./mynotes";
import Layout from "../components/Layout";
import NotePage from "../pages/note";
import SignUp from "./signup"; 
import signIn from "./signin";
import { Component } from "react";


const getUserLoggingState = gql`
    {
        isLoggedIn @client
    }
`;


// add the PrivateRoute component below our `Pages` component
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { loading, error, data } = useQuery(getUserLoggingState);
    // if the data is loading, display is loading message
    if(loading) {
        return <p>loading...</p>;
    }
    // if error, display error message
    if(error) {
        return <p>Error- Can not fetch data</p>;
    }
    // if the user is logged in redirect him to the dirired component 
    // else redirect him to the sign page
    return (
        <Route
            {...rest}
            render={props => {
                data.isLoggedIn === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: props.location }
                        }}
                    />
                )
            }}
        />
    );
};

const Pages = () => {
    return (    
        <Router>
            {/* wrap our routes withing the Layout component */}
            <Layout>
                <Route exact path="/" component={Home} />
                <PrivateRoute path="/mynotes" component={MyNotes} />
                <PrivateRoute path="/favorites" component={Favorites} />
                <Route path="/note/:id" component={NotePage} />
                <Route path="/signup" component={SignUp}/>
                <Route path="/signin" component={signIn}/>
            </Layout>

        </Router>
    );
};

export default Pages;