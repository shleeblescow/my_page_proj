
export default function RenderPostCard({ thisPost }) {

    // console.log(thisPost)

    return (

        <div>
            {/* <h1>ayy yi yiii</h1> */}
            <h1>{thisPost.title}</h1>
            <h3>{thisPost.body}</h3>
        </div>

    )

}