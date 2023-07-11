import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header title="My React Application" />
      <Content />
      <Footer />
    </div>
  );
}

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content() {
  const [text, setText] = useState('');

  const handleButton = () => {
    console.log(text);
  };

  const handleTextArea = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea onChange={handleTextArea} rows="10" cols="20" />
      <button onClick={handleButton}>Display Text</button>
      {text && <p>{text}</p>}
    </div>
  );
}

function Footer() {
  return <footer>This is Footer</footer>;
}

export default App;
