import React from "react";
import { useMutation } from "@apollo/client";
import { withRouter } from "react-router-dom";

import ButtonAsLink from "./ButtonAsLink";
import { deleteNote } from "../gql/mutation";
import { getCurrentUserNotes, getNotes } from "../gql/query";

const DeleteNote = (props) => {
    const [dropNote] = useMutation(deleteNote, {
        variables: {
            id: props.noteId
        },
        // refetch note list queries to update the cache
        refetchQueries: [{ query: getCurrentUserNotes, getNotes }],
        onCompleted: data => {
            // redirect the user to /mynotes
            props.history.push("/mynotes");
        }
        
    }); 
    
    return <ButtonAsLink onClick={dropNote} > Remove </ButtonAsLink>;
};

export default withRouter(DeleteNote);
