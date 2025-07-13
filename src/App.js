import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from "./blogs"
import CreateBlog from './create';

function App() {
  return (
    <Router>
      <nav style={{
  padding: '15px 30px',
  background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px'
}}>
  <h1 style={{ color: 'white', fontSize: '24px', margin: 0 }}>📝 AbuadBlog</h1>
  <div>
    <Link
      to="/"
      style={{
        marginRight: '20px',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '16px'
      }}
    >
      Blogs
    </Link>
    <Link
      to="/create"
      style={{
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '16px'
      }}
    >
      Create
    </Link>
  </div>
</nav>


      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
}

export default App;

