import Post from "../components/Post";
import mockPosts from "../components/GetPostData"

interface PostData {
  id: string;
  content: string;
  likes: number;
}


const Home: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      {mockPosts.map((post) => (
        <Post key={post.id} content={post.content} initialLikes={post.likes} />
      ))}
    </div>
  );
};

export default Home;

