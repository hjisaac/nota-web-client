import React from "react";

console.log("Le composant est appellé");

const Null = (props) => {
    console.log("Le composant dit <avant mon return>")
    return (
        <React.Fragment>
            {console.log("Foobar is like toto in french")}
        </React.Fragment>

    );
}

export default Null;