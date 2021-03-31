import React from "react";
import { useQuery, gql } from "@apollo/client";
import ReactMarkdown from "react-markdown";

import Button from "../components/Button";
import NoteFeed from "../components/NoteFeed";

// gql query to retrieve notes
const getNotes = gql`
    query NoteFeed($cursor: String) {
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

const Home = () => {

    const { data, loading, error, fetchMore } = useQuery(getNotes);

    // if data is loading, display loading message
    if(loading) {
        return <p>Loading...</p>;
    }

    if(error) {
        return <p>Error!</p>;
    }

    // if the data fetching is successful display that data
    return (
        <NoteFeed notes={data.noteFeed.notes}/>
    );
};

export default Home;