import React from "react";
import { useMutation } from "@apollo/client";
import { withRouter } from "react-router-dom";

import ButtonAsLink from "./ButtonAsLink";
import { deleteNote } from "../gql/mutation";
// import queries to refresh after note deletion
import { getCurrentUserNotes, getNotes } from "../gql/query";

const DeleteNote = props => {
    const  [dropNote] = useMutation(deleteNote, {
        variables: {
            id: props.noteId
        },
        refetchQueries: [{ query: getCurrentUserNotes, getNotes }],
        onCompleted: data => {
            props.history.push("/mynotes");
        }
    });

    return (
        <ButtonAsLink onClick={dropNote}>Delete Note</ButtonAsLink>
    );
};


export default withRouter(DeleteNote);