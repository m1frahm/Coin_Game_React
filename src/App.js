import logo from './logo.svg';
import './App.css';

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
  function flipCoin() {
    // assign random value where 0 = heads & 1 = tails
    var flip = Math.floor(Math.random() * 2);
    console.log(flip);
  }

  return (
    <div className="App">
    <header>COIN GAME</header>
      <button>Click Me To Flip</button>
      <button>Reset</button>
      <div> Score Count PlaceHolder </div>
      <div> Head Count </div>
      <div> Tail Count </div>
      <div> Win Message Placeholder </div>
    </div>
  );
}