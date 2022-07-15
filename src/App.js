import React, { useRef, useState } from 'react';
import './App.css';

function App() {

  const [sub, setSub] = useState("");

  const span = useRef();

  const handler = (e) => {
    console.log(e.target);
    setSub(e.target.value);
  }

  const handler2 = (e) => {
    e.preventDefault();
    span.current.style.display = "block";
  }

  return (
    <div className="App">
      <h1>HOME</h1>
      <p>당신의 이름은 무엇입니까?</p>
      <form onSubmit={handler2}>
        <input type="text" value={sub} onChange={handler}></input>
      </form>
      <span style={{display: "none"}} ref={span}>반갑습니다 { sub }님</span>
    </div>
  );
}

export default App;
