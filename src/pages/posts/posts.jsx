import PostCard from "../components/PostCard"

function Posts() {
    return (
        <div>
            <div className="max-w-2xl mx-auto">
                {[1, 2, 3].map(p => {
                    return <PostCard key={p} />
                })}
            </div>
        </div>
    )
}

export default Posts