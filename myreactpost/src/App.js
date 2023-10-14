import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import { FaThumbsUp } from "react-icons/fa";
import mockPosts from "./getPostData";

const Post = styled.div`
  box-sizing: border-box;
  padding: 10px 20px 10px 20px;
  border: solid 1px gray;
  border-radius: 20px;
  height: 100px;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const LikeButton = styled.button`
  padding: 10px;
  border: solid 1px gray;
  background-color: #008080;
  border-radius: 5px;
  height: 40px;
  width: 80px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const StyledThumbsUp = styled(FaThumbsUp)`
  color: #ffa142;
  font-size: 20px;
`;

function App() {
  const [likes, setLikes] = useState(mockPosts.map((post) => post.likes));

  const toggleLike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      // Toggle between original number of likes and number + 1
      newLikes[index] =
        newLikes[index] === mockPosts[index].likes
          ? newLikes[index] + 1
          : mockPosts[index].likes;
      return newLikes;
    });
  };

  return (
    <div className="App">
      {mockPosts.map((post, index) => (
        <Post key={post.id}>
          <div>{post.content}</div>
          <LikeButton onClick={() => toggleLike(index)}>
            <StyledThumbsUp />({likes[index]})
          </LikeButton>
        </Post>
      ))}
    </div>
  );
}

export default App;
