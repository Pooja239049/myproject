import React from "react";
import { useParams } from "react-router-dom";
import BlogForm from "../components/BlogForm";

const EditPost = ({ posts, onUpdate }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <p className="p-4">Post not found.</p>;

  const handleUpdate = (updatedPost) => {
    onUpdate(updatedPost);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Post</h1>
      <BlogForm initialData={post} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditPost;