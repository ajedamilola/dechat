import { useNavigate } from "react-router-dom"
import PostCard from "../components/PostCard"
import NewPost from "./newPost"

const Posts = () => {
    const navigate = useNavigate()

    const handlePost = (id) => {
        navigate(`post/${id}`)
    }

    return (
        <div>
            <div className="max-w-2xl mx-auto">
                <NewPost />
                {[1, 2, 3, 6].map(p => {
                    return <PostCard key={p} />
                })}
            </div>
        </div>
    )
}

export default Posts