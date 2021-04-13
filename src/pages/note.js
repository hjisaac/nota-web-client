import React from "react";
import { useQuery, gql } from "@apollo/client";

import Note from "../components/Note";
import { getNote } from "../gql/query";


const NotePage = props => {
    // store the id from the URL as a variable
    const id = props.match.params.id;
    console.log(props.match.params);
    console.log(id);
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