import React from "react";
import BlogForm from "../components/BlogForm";

const AddPost = ({ onAdd }) => {
  const handleAdd = (post) => {
    onAdd(post);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Add New Post</h1>
      <BlogForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddPost;