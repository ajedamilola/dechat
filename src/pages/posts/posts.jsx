import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

const Posts = () => {
  const navigate = useNavigate();

  const handlePost = (id) => {
    navigate(`post/${id}`);
  };

  return (
    <div className="grid w-full grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => {
        return <PostCard key={item} />;
      })}
    </div>
  );
};

export default Posts;
