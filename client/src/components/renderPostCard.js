import { useNavigate, useParams, Link } from 'react-router-dom';

export default function RenderPostCard({ thisPost, isAdmin }) {

    function deletePostDrama() {

        fetch(`/posts/${thisPost.id}`,{
            method:'DELETE'
        })
        .then(res => {
            if (res.ok) {
                console.log('yeah glad you deleted that that was such a stupid post')
            } else {
                //res.json().then(json => setErrors(Object.entries(json.errors)))
                res.json().then(retErrors => {
                    // setErrors(Object.entries(retErrors.errors))
                    console.log('nice try dumb dumb')
                })
            }
        })
    }


    return (

        <div>
            <h1>{thisPost.title}</h1>
            <h3>{thisPost.body}</h3>

            {isAdmin ?
                <button onClick={deletePostDrama}>
                    what a stupid post
                </button>
                :
                <h1>nothing for you stupid</h1>
            }


        </div>

    )

}