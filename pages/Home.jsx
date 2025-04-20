import React from "react";
import { Link } from "react-router-dom";

const Home = ({ posts, onDelete }) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Posts</h1>
        <Link to="/add" className="bg-green-500 text-white px-4 py-2 rounded">
          Add Post
        </Link>
      </div>
      <div className="space-y-4">
        {posts.length === 0 && <p>No posts available.</p>}
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            <div className="mt-2 space-x-2">
              <Link to={`/edit/${post.id}`} className="text-blue-500">
                Edit
              </Link>
              <button
                onClick={() => onDelete(post.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;