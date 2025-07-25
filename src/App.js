import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from "./blogs";
import CreateBlog from './create';

function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <nav className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-6 py-4 flex justify-between items-center shadow-md rounded-b-2xl">
        <h1 className="text-white text-2xl font-bold tracking-wide">AbuadBlog</h1>
        <div className="space-x-6">
          <Link
            to="/"
            className="text-white text-sm font-semibold hover:underline transition duration-150"
          >
            Blogs
          </Link>
          <Link
            to="/create"
            className="text-white text-sm font-semibold hover:underline transition duration-150"
          >
            Create
          </Link>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
