import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

import NoteForm from "../components/NoteForm";
import { getNote, getCurrentUser } from "../gql/query";
import { editNote } from "../gql/mutation";


const EditNote = props => {
    // store the id from the URL as a variable
    const id = props.match.params.id;

    const { loading:loadingNote, error:errorNote, data:dataNote } = useQuery(getNote, { variables: { id }});    
    // get the current user data as within getCurrentUser
    const { data:currentUserData, loading:loadingCurrentUserData, error:errorCurrentUserData } = useQuery(getCurrentUser);    

    const [updateNote] = useMutation(editNote,  {
        variables: {
            id
        }, 
        onCompleted: () => {
            // console.log("hello since `onCompleted event from editNote component`");
            props.history.push(`/note/${id}`);
        }
    });

    if(loadingCurrentUserData || loadingNote) {
        return <p>  Loading... </p>;
    }

    if(errorCurrentUserData || errorNote) {
        console.log(errorCurrentUserData);
        return <p> Error- Note not found! </p>;
    }

    if(currentUserData.me.id !== dataNote.note.author.id) {
        return <p>You don't have access to edit this note</p>;
    }

    return (
        <NoteForm content={dataNote.note.content} action={updateNote}/>
    );
}

export default EditNote;