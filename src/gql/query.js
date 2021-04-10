import { gql } from "@apollo/client";

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


// gql query to retrieve notes
const getNotes = gql`
    query noteFeed($cursor: String) {
        noteFeed(cursor: $cursor) {
            cursor
            hasNext
            notes {
                id
                createdAt
                content
                favoriteCount
                author {
                    username
                    id
                    avatar
                    email
                }
            }
        }
    }
`;


const getUserLoggingState = gql`
    {
        isLoggedIn @client
    }   
`;

const getCurrentUserNotes = gql`
    query me {
        me {
            id
            username
            notes {
                createdAt
                content
                id
                favoriteCount
                author {
                    username
                    id
                    avatar 
                }
            }
        }
    }
`;

const getCurrentUserFavorites = gql`
    query me {
        me {
            id
            username
            favorites {
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
        
    }
`;

const getCurrentUser = gql`
    query me {
        me {
            id
            favorites {
                id
            }
        }
    }
`;

export { getNote, getNotes, getUserLoggingState, getCurrentUserNotes, getCurrentUserFavorites, getCurrentUser };         