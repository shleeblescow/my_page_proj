import { useNavigate, useParams, Link } from 'react-router-dom';
import PostForm from './postForm';

export default function RenderPostCard({ thisPost, isAdmin }) {

    // pass this post to the post form page to fill in existing data
    // render form so can edit
    // save changes with patch
    // automatically render page with updated post w form gone on submit

//     function editPostDrama(tripStuff, formDataSubmit) {
//         fetch(`/trips/${params.id}`,{
//             method: 'PATCH',
//             body: formDataSubmit
//         })
//         .then(res => {
//             if(res.ok){
//                 res.json()
//                 .then((postUpdate) => {
//                     console.log(postUpdate)
//                     //setTrip(() => tripUpdate)
//                     console.log('hellow from an updated state')
//                     clickDrama()
//                 });
//             } else {
//                 console.log('better luck next time buckaroo')
//             }
//         })
// }

    function deletePostDrama() {

        fetch(`/posts/${thisPost.id}`,{
            method:'DELETE'
        })
        .then(res => {
            if (res.ok) {
                console.log('yeah glad you deleted that that was such a stupid post')
            } else {
                res.json().then(retErrors => {
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
                <div>
                    <button onClick={deletePostDrama}>
                        what a stupid post - delete it
                    </button>
                    <button onClick={editPostDrama}>
                        what a stupid post - edit it
                    </button>
                </div>
                :
                <p>nothing for you stupid</p>
            }


        </div>

    )

}