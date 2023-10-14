import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";

interface PostProps {
  content: string;
  initialLikes: number;
}


const Post: React.FC<PostProps> = ({ content, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);

  const toggleLike = () => {
    setLikes((prevLikes) => (prevLikes === initialLikes ? initialLikes + 1 : initialLikes));
  };

  return (
    <div className="p-4 border-2 border-gray-300 rounded-md max-w-xl mx-auto mt-4 flex flex-col space-y-4 whitespace-pre-line" >
      <p>{content}</p>
      <button 
        onClick={toggleLike} 
        className="px-4 py-2 mt-2 bg-bluegreen rounded-md text-white flex items-center space-x-2 w-20"
      >
        <FaThumbsUp style={{ color: '#ffa142' }}/>
        <span>({likes})</span>
      </button>
    </div>
  );
};

export default Post;
