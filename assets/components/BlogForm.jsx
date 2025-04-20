import React from "react";
import { useNavigate } from "react-router-dom";

const BlogForm = ({ initialData = { title: "", content: "" }, onSubmit }) => {
  const [title, setTitle] = React.useState(initialData.title);
  const [content, setContent] = React.useState(initialData.content);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...initialData, title, content });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        className="w-full border p-2"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full border p-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button className="bg-blue-500 text-white px-4 py-2" type="submit">
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
