import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import NoteFeed from "../components/NoteFeed";
import { getCurrentUserFavorites } from "../gql/query";


const Favorites = () => {
    useEffect(() => {
        // update the document title
        document.title = "Favorites - Nota";
    });

    const { loading, error, data } = useQuery(getCurrentUserFavorites);
    

    if(loading) {
        return <p>Loading...</p>;
    }

    if(error) {
        console.log("there is an error");
        return <p>{`Error- ${error.message}`}</p>;
    }


    if(data.me.favorites.length !== 0) {
        return <NoteFeed notes={data.me.favorites} />;
    } else {
        return <p>No favorites yet</p>
    }
};


export default Favorites;