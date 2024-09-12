import { useNavigate } from "react-router-dom"
import PostCard from "../components/PostCard"

const  Posts =() => {
const navigate  = useNavigate()

const handlePost=(id)=> {
    navigate(`post/${id}`)
}

    return (
        <div>
            {[1, 2, 3].map(p => {
                return <PostCard key={p} />
            })}
        </div>
    )
}

export default Posts