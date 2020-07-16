import React from 'react';
import logo from './logo.svg';
import './style.css';
import myimg from "./12.jpg.jpg";
import myvid from './Top 10 Best Hotels in Hammamet, Tunisia.mp4';

function App() {
  return (
    <div >


      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>

        <h1 clasName="title red"> Mohamed </h1>
        <img src={myimg} />
        <video className="app" controls>
          <source src={myvid} />
        </video>
        <img src="/logo192.png" />
      </div>


    </div >)
}

export default App;
