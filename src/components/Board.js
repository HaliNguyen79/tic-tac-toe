import React, { useState } from 'react';
import Square from './Square';

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square action={() => handleClick(0)} value={squares[0]} />
          <Square action={() => handleClick(1)} value={squares[1]}/>
          <Square action={() => handleClick(2)} value={squares[2]}/>
        </div>
        <div className="board-row">
          <Square action={() => handleClick(3)} value={squares[3]}/>
          <Square action={() => handleClick(4)} value={squares[4]}/>
          <Square action={() => handleClick(5)} value={squares[5]}/>
        </div>
        <div className="board-row">
          <Square action={() => handleClick(6)} value={squares[6]}/>
          <Square action={() => handleClick(7)} value={squares[7]}/>
          <Square action={() => handleClick(8)} value={squares[8]}/>
        </div>
      </div>
    </div>
  );
}
