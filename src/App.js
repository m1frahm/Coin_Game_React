import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import CoinImage from "./components/CoinImage";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

export default function App() {
  const [coin, setCoin] = useState(null);
  // coin is the value
// setCoin is the function that changes the value of coin

  function flipCoin() {
    // assign random value where 0 = heads & 1 = tails
    var flip = Math.floor(Math.random() * 2);
    console.log(flip);
    setCoin(flip) // now the value of coin will be 0 or 1 bc we passed  
  }

  return (
    <div className="App">
    <header>COIN GAME</header>
    <CoinImage coin={coin}></CoinImage>
      <button onClick={flipCoin}>Click Me To Flip</button>
      <button>Reset</button>
      <div> Score Count PlaceHolder </div>
      <div> Head Count </div>
      <div> Tail Count </div>
      <div> Win Message Placeholder </div>
    </div>
  );
}