import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = 'https://6866534a89803950dbb2384e.mockapi.io/blogs';

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
          <h1 style={{ textAlign: 'center', color: '#333' }}>AbuadBlog <span style={{ textAlign: 'center', color:'#101', fontSize:'18px'}}><p>As e dey hot...</p></span></h1>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : blogs.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No blogs yet.</p>
      ) : (
        blogs.map(blog => (
          <div key={blog.id} style={{
           border: '1px solid #e0e0e0',
           borderRadius: '12px',
           padding: '20px',
           marginBottom: '20px',
           backgroundColor: '#ffffff',
           boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)', // bigger, softer shadow
           transition: 'transform 0.2s ease, box-shadow 0.2s ease',
           cursor: 'pointer',
}}
>
            <h2>{blog.title}</h2>
            <p><b>Author:</b> {blog.author}</p>
            <p>{blog.content}</p>
            <small>{new Date(blog.createdAt).toLocaleDateString()}</small>
          </div>
        ))
      )}
    </div>
  );
}

