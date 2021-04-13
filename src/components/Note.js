import React from "react";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

import NoteUser from "../components/NoteUser";
import { getUserLoggingState } from "../gql/query";

const StyledNote = styled.article`
    max-width: 800px;
    margin: 0 auto;
`;

const MetaData = styled.div`
    @media (min-width: 500px) {
        display: flex;
        align-items: top;
    }
`;

// space between the avatar and meta info
const MetaInfo = styled.div`
    padding-right: 1em;
`;

// align UserAction to the right on large screen

const UserAction = styled.div`
    margin-left: auto;
`;



const Note = ({ note }) => {

    const { loading, error, data } = useQuery(getUserLoggingState);

    // if the data is loading display a loading message
    if(loading) {
        return <p>Loading...</p>;
    }
    if(error) {
        return <p>{`Error!- ${error.message}`}</p>;
    }

    return (
        <StyledNote>
        <MetaData>
        <MetaInfo>
            <img src={note.author.avatar} alt={`${note.author.username} avatar`}  height="50px" />
        </MetaInfo>
        <MetaInfo>  
            <em>by</em> {note.author.username} <br/>
            {format(note.createdAt, "MMM Do YYYY")}
        </MetaInfo>
        { 
            data.isLoggedIn ? (
                <UserAction>
                    <NoteUser note={note}/>
                </UserAction>
            ) : (
                <UserAction>
                    <em>Favorites:</em>  {note.favoriteCount}
                </UserAction>
            )
        }
        </MetaData>

        <ReactMarkdown source={note.content}/>
        </StyledNote>
    );
};

export default Note;