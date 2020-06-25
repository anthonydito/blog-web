import React from 'react';
import './App.css';

function App() {

  const onSubmit = () => {
    alert("We need to submit the user's input!");
  };

  return (
    <div className="App">
      <h1>Your Blog</h1>
      <p>These are your most recent posts</p>
      <input placeholder="What's up?" />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default App;
