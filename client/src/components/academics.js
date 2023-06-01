import React, { useState, useEffect } from 'react';

export default function Academics({}) {

    useEffect(() => {
        fetch('/academic_posts')
        .then((res) => {
            if(res.ok) {
                res.json()
                .then((posts) => {
                    console.log(posts)
                }
            )} else {
                console.log('noooope')
            }
        })
    })


    return (
        <h1> idk something </h1>
    )
}