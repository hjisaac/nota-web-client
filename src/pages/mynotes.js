import React, { useEffect } from "react";

const MyNotes = () => {
    useEffect(() => {
        // update the document title
        document.title = "My Notes - Nota";
    });

    return (
        <div>
            <p> There are my notes </p>
        </div>
    );
};


export default MyNotes;