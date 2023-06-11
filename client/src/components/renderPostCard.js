export default function RenderPostCard({ thisPost, isAdmin }) {


    return (

        <div>
            <h1>{thisPost.title}</h1>
            <h3>{thisPost.body}</h3>

            {isAdmin ?
                <button>
                    yeah we're cool
                </button>
                :
                <h1>nothing for you stupid</h1>
            }


        </div>

    )

}