import React, { useState, useEffect } from "react";
import Board from "./Board";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [winner, setWinner] = useState(null);
  
  const newMove = currentMove + 1;
  const historyToKeep = history.slice(0, newMove);
// const newBoard = history.length - currentMove

  //Declaring a Winner
  useEffect(() => {
    const winnerValue = calculateWinner(history[currentMove]); // check for a winner
    setWinner(winnerValue); // update state if someone won
  // }
  }, [history,currentMove]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    if (winner) return;
    const squares = [...history[currentMove]];
    if (squares[i]) return;
    squares[i] = currentMove % 2 === 0 ? "X" : "O";

    setHistory([...historyToKeep, squares]);
    setCurrentMove(newMove);
    // setCurrentMove()
  };

  //Restart game 
  const handlRestart = () => {
    setHistory([Array(9).fill(null)]);
    setWinner(null);
    setCurrentMove(0);
  };

  const moves = history.map((board, move) => (
  <li key={move}>
    <button onClick={() => {
      if (winner) return;
      setCurrentMove(move);
    }}>
      Go to move #{move}
    </button>
  </li>
));

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {currentMove % 2 === 0 ? "X" : "O"}</span>
        <Board squares={history[currentMove]} handleClick={handleClick} />
        <div className="history">
        <h3>History</h3>
        <ol>{moves}</ol>
      </div>
      </div>
      <button onClick={handlRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
