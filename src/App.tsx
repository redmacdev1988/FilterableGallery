import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';

// functions are only declared once here, and called when needed.
  // const getImageUrls = () => {
  //   return [
  //     "http://chineseruleof8.com/wp-content/uploads/2022/02/IMG_20201205_133539.jpg",
  //     "http://chineseruleof8.com/wp-content/uploads/2022/02/IMG_20200717_193404.jpg",
  //     "http://chineseruleof8.com/wp-content/uploads/2022/02/mmexport1593746879387.jpg"
  //   ]
  // };

function App() {
  const [input, setInput] = useState("");
  const [b, setB] = useState(true);

  // we have useCallback to store this function. Whenever our input changes, we return new array, so we re-render.
  // But when we click a  button to update state, even though this component re-renders, this
  // function won't be re-created.
  const getImageUrls = useCallback(() => {
    return [
      "http://chineseruleof8.com/wp-content/uploads/2022/02/IMG_20201205_133539.jpg",
      "http://chineseruleof8.com/wp-content/uploads/2022/02/IMG_20200717_193404.jpg",
      "http://chineseruleof8.com/wp-content/uploads/2022/02/mmexport1593746879387.jpg"
    ];
  }, []); // only called on mount and unmount
  // for demo purpose, use [input]. For every character update, we call this function
  // but when button is clicked to update state, component is updated, but this getImageUrls won't be re-created
  

  // a) functions declared here are re-declared between render. Will always return a new array:
  // so when we click a button to update state, component gets re-rendered and this function will
  // be re-declared and returns a new array. Therefore, any other state changes will make our Gallery component
  // re-render its arr.
  // const getImageUrls = () => {
  //   return [
  //     "http://chineseruleof8.com/wp-content/uploads/2022/02/IMG_20201205_133539.jpg",
  //     "http://chineseruleof8.com/wp-content/uploads/2022/02/IMG_20200717_193404.jpg",
  //     "http://chineseruleof8.com/wp-content/uploads/2022/02/mmexport1593746879387.jpg"
  //   ]
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <input type="text" value={input} onChange={event => setInput((event.target.value))} />

        <button onClick={() => setB(prevB => !prevB)}> {b ? "true":"false"}</button>

			  <Gallery getItems={getImageUrls} />

      </header>
    </div>
  );
}

export default App;
