import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import ButtonAsLink from "./ButtonAsLink";
import { toggleFavorite } from "../gql/mutation";
import { getCurrentUserFavorites } from "../gql/query";

const FavoriteNote = (props) => {

    // store the note favorite count as state
    const [count, setCount] = useState(props.favoriteCount);

    // 
    const [favorited, setFavorited] = useState(
        (props.me.favorites.filter(note => note.id === props.noteId)).length > 0
    );

    const [changeFavorite] = useMutation(toggleFavorite, {
        variables: {
            id: props.noteId
        },
        refetchQueries: [{ query: getCurrentUserFavorites }]
    });

    return (
        <React.Fragment >
        {
            favorited ? (
                <ButtonAsLink 
                    onClick={() => {
                        changeFavorite();
                        setFavorited(false);
                        setCount(count-1);
                    }}
                >
                Remove from favorites
                </ButtonAsLink>
            ) : (
                <ButtonAsLink
                    onClick={() => {
                        changeFavorite();
                        setFavorited(true);
                        setCount(count+1);
                    }
                    }
                >
                Add to Favorites
                </ButtonAsLink>
            )
        } : {count}
        </React.Fragment>
    );
};

export default FavoriteNote;