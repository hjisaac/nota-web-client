import React, { useEffect } from "react";

const Favorites = () => {
    useEffect(() => {
        // update the document title
        document.title = "Favorites - Nota";
    });
};

return (
    <div>
        <h1>Nota App</h1>
        <p>There are my Favorites</p>
    </div>
);


export default Favorites;