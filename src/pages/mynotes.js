import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import NoteFeed from "../components/NoteFeed/";
import { getCurrentUserNotes } from "../gql/query";
import Note from "../components/Note";

const MyNotes = () => {
    useEffect(() => {
        // update the document title
        document.title = "My Notes - Nota";
    });

    const { loading, error, data } = useQuery(getCurrentUserNotes);
    if(loading) {
        return <p>Loading...</p>;
    }
    if(error) {
        return <p>{`Error- ${error.message}`}</p>;
    }
    // if the query is successful and there are notes, return the feed of notes
    // else if the query is successful and there are not notes display a message.
    if(data.me.length !== 0) {
        return <NoteFeed notes={data.me.notes}></NoteFeed>;
    } else {
        return <p>No notes yet</p>;
    }

};


export default MyNotes;