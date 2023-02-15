function WinMessage(props) {
  const headWins = "The Winner is HEADS!";
  const tailWins = "The Winner is TAILS!";
  const forNull = "You have not flipped your coin yet!";

  if (props.heads === 5) {
    return <text>{headWins}</text>; // variables must always be in {}
  } else if (props.tails === 5) {
    return <text>{tailWins}</text>;
  } else if (props.coin === null) {
    return <text>{forNull}</text>;
  }
}

export default WinMessage;









//This is the current fucntion
  //   if (props.coin === 0) {
  // return <text>{headWins}</text> // variables must always be in {}
  //   } else if (props.coin === 1) {
  //     return <text>{tailWins}</text>
  //     } else if (props.coin === null) {
  //     return <text>{forNull}</text>
  //     }
  //   }
