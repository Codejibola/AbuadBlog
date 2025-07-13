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
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius:'5px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)' }}
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius:'5px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)' }}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={5}
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius:'5px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'}}
        />
        <button type="submit" disabled={submitting} style={{color:'#0000ff', backgroundColor:'#000000', font:'60px', fontFamily:'sans-serif', height:'30px', width:'120px', borderRadius:'4px'}}>
          {submitting ? 'Submitting...' : 'Create Blog'}
        </button>
      </form>
    </div>
  );
}

