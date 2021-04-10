import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { getUserLoggingState } from "../gql/query";


const NoteUser = props => {

    const { loading, error, data } = useQuery(getUserLoggingState);

    console.table("props from NoteUser", props);

    // if the data is loading display a loading message
    if(loading) {
        return <p>Loading...</p>;
    }
    if(error) {
        return <p>{`Error!- ${error.message}`}</p>;
    }

    return <Link to={`edit/${props.note.id}`}>Edit</Link>;
}

export default NoteUser;