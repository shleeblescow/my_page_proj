import React, { useState, useEffect } from 'react';

export default function HomePage({ myDeets, fetchMyDeets }){

    const [deetsToDisplay, setDeetsToDisplay] = useState([])

    useEffect(() => {
        fetchMyDeets()
        setDeetsToDisplay(myDeets.first)
    },[])

    console.log(myDeets)
    console.log(deetsToDisplay)

    return(

        <div>
            {/* <h1>{myDeets.}</h1> */}
            {/* <h2>{myDeets.location}</h2>
            <h3>{myDeets.careergoals}</h3>
            <h4>{myDeets.bio}</h4> */}
        </div>



    )
}