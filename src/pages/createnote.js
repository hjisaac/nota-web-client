import React, { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";

import NoteForm from "../components/NoteForm";
import { getNotes, getCurrentUserNotes } from "../gql/query";

const createNewNote = gql`
    mutation createNote($content: String!) {
        createNote(content: $content) {
            id
            content
            createdAt
            favoriteCount
            favoritedBy {
                id
                username
            }
            author {
                id
                username
            }
        }
    }
`;


const CreateNote = props => {
    
    useEffect(() => {
        // update the document title
        document.title = "Create note | Nota";
    });

    const [data, { loading, error }] = useMutation(createNewNote, {
        // refetch the getNotes query to update the cache
        refetchQueries: [{ query: getNotes }, { query: getCurrentUserNotes }],
        onCompleted: data => {
            // when completed, redirect the user to the note page
            props.history.push(`note/${data.createNote.id}`);
            console.log(data);
        }
    });

    return (
        <React.Fragment>
            {/* as the mutation is loading display loading message */}
            { loading && <p>Loading...</p>}
            {/* if there is an error display the error message */}
            { error && <p>Error saving the note</p>}
            <NoteForm action={data} />

        </React.Fragment>
    );

};

export default CreateNote;