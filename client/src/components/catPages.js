import React, { useState, useEffect } from 'react';
import {v4 as uuid} from "uuid";

import RenderPostCard from "./renderPostCard";

export default function CatPages({cat, myPosts, fetchMyPosts}) {

    useEffect(() => {
        fetchMyPosts()
        // console.log(myPosts)
    })


    return (
        <div>
            <h1> {cat} </h1>
            {myPosts.map((eachPost) => 
                <div key={uuid()} >
                    <RenderPostCard
                        thisPost={eachPost}
                        // onButtonDrama={() => navigate(`/browsetrips/${eachTrip.id}`)}
                    />
                    <br/>
                </div>
            )}


        </div>

    )
}