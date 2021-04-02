import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMutation, useApolloClient, gql } from "@apollo/client";

import Button from "../components/Button";
import UserForm from "../components/UserForm";

const signUpUser = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`;


const Wrapper = styled.div`
    border: 1px solid #f5f4f0;
    max-width: 500px;
    padding: 1em;
    margin: 0 auto;
`;

const Form = styled.form`
    label, input {
        display: block;
        line-height: 2em;
    }

    input {
        width: 100%;
        margin-bottom: 1em;
    }
`;


const SignUp = props => {

    // ApolloClient
    const apolloClient = useApolloClient();

    // set the default state of the form
    const [values, setValues] = useState();

    // update the state when a user types in the form
    const onChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        // update the document title
        document.title = "Sign Up | Nota";
    });

    const [ signUp, { loading, error }] = useMutation(signUpUser, {
        onCompleted: data => {
            // console.log the jwt when the mutation is complete
            localStorage.setItem("token",  data.signUp);
            console.log(localStorage.getItem("token"));
            // update the local cache
            apolloClient.writeData({
                data: { isLoggedIn: True }
            });
            props.history.push("/");
        }
    });

    return (
        <React.Fragment>
            <UserForm action={signUp} formType="signup" />
            {/* if data is loading, display a loading message */}
            { loading && <p>loading...</p> }
            {/* if there is an error, display error message */}
            { console.log(error) }
            { error && <p>Error- Account creation failed</p> }
        </React.Fragment>
    );
};

export default SignUp;