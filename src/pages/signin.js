import React, { useEffect } from "react";
import { useMutation, useApolloClient, gql } from "@apollo/client";

import UserForm from "../components/UserForm";
const signInUser = gql`
    mutation signIn($email: String, $password: String!) {
        signIn(email: $email, password: $password)
    }
`;

const signIn = props => {
    useEffect(() => {
        // update the document title
        document.title = "Sign In | Nota"
    })

    const apolloClient = useApolloClient();
    const [signIn, { loading, error }] = useMutation(
        signInUser,
        {
            onCompleted: data => {
                // store the token
                localStorage.setItem("token", data.signIn);
                // update the local cache 
                apolloClient.writeData({ data: { isLoggedIn: true } });
                // redirect the user to the home page
                props.history.push("/");
            }
        }
    );

    return (
        <React.Fragment>
            <UserForm action={signIn} formType="signin" />
            {/* if the data is loading, display loading message */}
            { loading && <p>Loading...</p> }
            {/* if there is an error display an error message*/}
            { error && <p>Check your email/username and password</p>}
        </React.Fragment>
    );
}

export default signIn;