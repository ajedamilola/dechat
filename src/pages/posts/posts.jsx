import PostCard from "../components/PostCard"

function Posts() {
    return (
        <div>
            {[1, 2, 3].map(p => {
                return <PostCard key={p} />
            })}
        </div>
    )
}

export default Posts