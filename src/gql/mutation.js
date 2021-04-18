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

const toggleFavorite = gql`
    mutation toggleFavorite($id: ID!) {
        toggleFavorite(id: $id) {
            id
            favoriteCount
        }
    }
`;
export { editNote, deleteNote, toggleFavorite };