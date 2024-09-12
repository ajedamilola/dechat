import PostCard from "../components/PostCard"
import NewPost from "./newPost"

function Posts() {
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