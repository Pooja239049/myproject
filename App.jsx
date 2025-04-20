import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<Home posts={posts} onDelete={deletePost} />} />
      <Route path="/add" element={<AddPost onAdd={addPost} />} />
      <Route path="/edit/:id" element={<EditPost posts={posts} onUpdate={updatePost} />} />
    </Routes>
  );
};

export default App;