import React, { useState, useEffect } from 'react';

export default function HomePage({ myDeets, fetchMyDeets }){

    useEffect(() => {
        fetchMyDeets()
    },[])

    // console.log(myDeets)

    return(

        <div>
            <h1>my deets</h1>
            <h1>{myDeets.username}</h1> 
            <h2>{myDeets.location}</h2>
            <h3>{myDeets.careergoals}</h3>
            <h4>{myDeets.bio}</h4>
        </div>



    )
}