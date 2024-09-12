import { useParams } from "react-router-dom"

function Post() {
const {id} = useParams()

    return (
        <div>Post</div>
    )
}

export default Post