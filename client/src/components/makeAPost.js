import { useState, useEffect } from "react";
import PostForm from "./postForm";

export default function MakeAPost({}) {

    const [errors, setErrors] = useState([])

    function handlePostPost(postStuff) {

        console.log(postStuff)
        
        fetch(`/posts`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(postStuff)
        })
          .then(res => {
              if(res.ok){
                  res.json().then(postStuff => {
                      console.log(`${postStuff.title} sickkkk post dude`)
                  })
              }else {
                // TO DO: ERROR POP UP
                  res.json().then(json => setErrors(Object.entries(json.errors)))
              }
        })
    }


    return (
        <div>
            <h1> publish a new post </h1>
            <PostForm
                onClickDrama={(postStuff) => handlePostPost(postStuff)}
            />
        </div>
    )
}