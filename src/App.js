import React from 'react';
import './App.css';
import BlogPost from './BlogPost';

function App() {

  const [text, setText] = React.useState("");
  const [blogPosts, setBlogPosts] = React.useState([]);

  const onSubmit = () => {
    setBlogPosts([
      {
        text: text,
        createdAt: new Date()
      },
      ...blogPosts
    ])
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <h1>Your Blog</h1>
      <p>These are your most recent posts</p>
      <input 
        onChange={onInputChange}
        value={text} 
        placeholder="What's up?" />
      <button onClick={onSubmit}>Submit</button>
      {blogPosts.map((blogPost) => (
        <BlogPost 
          key={blogPost.createdAt} 
          text={blogPost.text} 
          createdAt={blogPost.createdAt} />
        ))}
    </div>
  );
}

export default App;
