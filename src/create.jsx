import React, { useState } from 'react';
import axios from 'axios';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const API_URL = 'https://6866534a89803950dbb2384e.mockapi.io/blogs';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post(API_URL, {
        title,
        content,
        author,
        createdAt: new Date().toISOString(),
      });
      alert('Blog created!');
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (err) {
      console.error('Error creating blog:', err);
      alert('Failed to create blog');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">Create New Blog</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1a1a] p-6 rounded-xl shadow-2xl space-y-4 border border-gray-700"
      >
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={6}
          className="w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-3 rounded-md text-white font-semibold transition-all duration-200 ${
            submitting
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {submitting ? 'Submitting...' : 'Create Blog'}
        </button>
      </form>
    </div>
  );
}
