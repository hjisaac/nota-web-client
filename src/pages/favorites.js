import React, { useEffect } from "react";

const Favorites = () => {
    useEffect(() => {
        // update the document title
        document.title = "Favorites - Nota";
    });

    return (
        <div>
            <p>There are my Favorites</p>
        </div>
    );
};




export default Favorites;