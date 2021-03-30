import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import Header from "../components/Header";
import Navigation from "../components/Navigation"; 
import Button from "../components/Button";


// const getNotes = gql`
// query NoteFeed($cursor: String) {
//     noteFeed(cursor: $cursor) {
//         cursor
//         hasNext
//         notes {
//             id
//             createdAt
//             content
//             favoriteCount
//             author {
//                 username
//                 id
//                 avatar
//             }
//         }
//     }
// }
    
// `;


const Home = () => {

    // console.log("hraonrenfdqsf")

    // const { data, loading, error, fetchMore } = useQuery(getNotes);
    // if(loading) {
    //     return <p>Loading...</p>;
    // }

    // if(error) {
    //     return <p>Error - Can not fetch data from the api</p>;
    // }

    return (
        <div>
            {/* {console.log(data)} */}
            The data loaded!
            {/* <Button>Click me!</Button> */}
        </div>
    );
};

export default Home;