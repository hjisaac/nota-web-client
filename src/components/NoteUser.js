import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../gql/query";
import DeleteNote from "./DeleteNote";


const NoteUser = props => {

    const { loading, error, data } = useQuery(getCurrentUser);
    // if the data is loading display a loading message
    if(loading) {
        return <p>Loading...</p>;
    }
    if(error) {
        return <p>{`Error!- ${error.message}`}</p>;
    }

    return (
        <React.Fragment>
            {
                data.me.id === props.note.author.id && (
                    <React.Fragment>
                        <Link to={`/edit/${props.note.id}`}>Edit</Link>
                        <br/>
                        {console.log(props)}
                        <DeleteNote noteId={props.note.id} />
                    </React.Fragment> 
                )
            }
            <br/>
            Favorites: {props.note.favoriteCount}
        </React.Fragment>
    );
    
}

export default NoteUser;