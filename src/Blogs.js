import React from 'react';
import './Blogs.css';
import BlogPost from './BlogPost';

function Blogs() {

  const [text, setText] = React.useState("");
  const [blogPosts, setBlogPosts] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8080/blogs")
    .then((data) =>  data.json())
    .then((blogs) => {
      setBlogPosts(blogs)
    })
  }, []);

  const onSubmit = () => {
    var blogSaving = {
      text: text
    };
    fetch("http://localhost:8080/create-blog", {
      method: "POST",
      body: JSON.stringify(blogSaving),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((data) => data.json())
    .then((blogs) => {
      setBlogPosts(blogs)
    });
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  }

  const onSignOut = () => {
    localStorage.removeItem("accessToken");
  }

  return (
    <div className="App">
      <button onClick={onSignOut}>Sign Out</button>
      <h1>Your Blog</h1>
      <p>These are your most recent posts</p>
      <input 
        onChange={onInputChange}
        value={text} 
        placeholder="What's up?" />
      <button onClick={onSubmit}>Submit</button>
      {blogPosts.map((blogPost) => (
        <BlogPost 
          key={blogPost._id} 
          text={blogPost.text} 
          createdAt={new Date(blogPost.createdAt)} />
        ))}
    </div>
  );
}

export default Blogs;
