import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import CoinImage from "./components/CoinImage";
import WinMessage from "./components/WinMessage";

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
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [coin, setCoin] = useState(null); // coin is the value associated w H or T coin // setCoin is the function that changes the value of coin

  function Reset() {
    setTails(0);
    setHeads(0);
    setCoin(null);
  }

  function flipCoin() {
    // assign random value where 0 = heads & 1 = tails
    if (heads === 5 || tails === 5) {
      return Reset();
    }
    var flip = Math.floor(Math.random() * 2);
    console.log(flip);
    setCoin(flip); // now the value of coin will be 0 or 1 bc we passed
    if (flip === 0) {
      return setHeads(heads + 1);
    } else if (flip === 1) {
      return setTails(tails + 1);
    }
  }
  
  return (
    <div className="App">
      <h1>COIN GAME</h1>
      <h2>
        This is a game of five points. Whoever gets five points first, wins!
      </h2>
      <CoinImage coinvalue={coin} />{" "}
      {/*coin is state variable //coin value is prop name of coin image*/}
      <button class="buttonclass" onClick={flipCoin}>
        Click Me To Flip
      </button>
      <button onClick={Reset}>Reset</button>
      <b><p> Score Tally</p></b>
      <p>Head Count = {heads}</p>
      <p>Tail Count= {tails}</p>
      <h3><b>
        <WinMessage heads={heads} tails={tails} coin={coin} />
      </b></h3>
      {/* Coin Null <CoinImage coin={null} /> // testing to see what shows on screen
      Coin 0 <CoinImage coin={0} />
      Coin 1 <CoinImage coin={1} />
      Coin 5 <CoinImage coin={5} /> */}
    </div>
  );
}
