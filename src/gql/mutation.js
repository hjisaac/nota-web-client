import { gql } from "@apollo/client";


const editNote = gql`
    mutation updateNote($id: ID!, $content: String!) {
        updateNote(id: $id, content: $content) {
            id
            content
            createdAt
            favoriteCount
            favoritedBy {
                id
                username
            }
            author {
                username
                id
            }
        }
    }
`;

const deleteNote = gql`
    mutation deleteNote($id: ID!) {
        deleteNote(id: $id)
    }
`;

export { editNote, deleteNote };