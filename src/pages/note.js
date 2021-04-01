import React from "react";
import { useQuery, gql } from "@apollo/client";

import NoteFeed from "../components/NoteFeed";
import Note from "../components/Note";

const getNote = gql`
query note($id: ID!) {
    note(id: $id) {
        id
        createdAt
        content
        favoriteCount
        author {
            username
            id
            avatar
        }
    }
}
    
`;

const NotePage = props => {
    // store the id from the URL as a variable
    const id = props.match.params.id;

    const { loading, error, data } = useQuery(getNote, { variables: { id }});

    if(loading) {
        return <p>  Loading... </p>
    }

    if(error) {
        console.log(error);
        return <p> Error! </p>
    }

    return (
        <Note note={data.note}/>
    );
}

export default NotePage;