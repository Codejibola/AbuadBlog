import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedBlog, setExpandedBlog] = useState(null);

  const API_URL = 'https://6866534a89803950dbb2384e.mockapi.io/blogs';

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const toggleExpand = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <div className="min-h-screen px-4 sm:px-10 py-12 bg-[#0b0f19] text-[#e5e7eb] font-sans">
      <h1 className="text-4xl text-center font-bold mb-3 text-[#2563eb]">AbuadBlog</h1>
      <p className="text-center text-gray-400 mb-12 text-sm italic">As e dey hot...</p>

      {loading ? (
        <p className="text-center text-gray-300">Loading...</p>
      ) : blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs yet.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => {
            const isExpanded = expandedBlog === blog.id;
            const previewContent = blog.content.slice(0, 160);

            return (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6 shadow-xl hover:shadow-[#2563eb66] transition-all duration-300"
              >
                <h2 className="text-xl font-semibold text-[#3b82f6] mb-1">{blog.title}</h2>
                <p className="text-sm text-gray-400 mb-3">
                  <span className="text-gray-500">By</span> {blog.author}
                </p>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={isExpanded ? "full" : "preview"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-sm mb-3"
                  >
                    {isExpanded ? blog.content : `${previewContent}...`}
                  </motion.p>
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toggleExpand(blog.id)}
                  className="mt-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs px-4 py-2 rounded-full transition duration-200"
                >
                  {isExpanded ? "See less ▲" : "See more ▼"}
                </motion.button>

                <p className="text-xs text-gray-500 mt-4">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
