import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Node from './components/Node';

const NUM_ROWS = 20;
const NUM_COLS = 40;
const START_POS = { row: 10, col: 5 };
const END_POS = { row: 10, col: 35 };

const generateInitialGrid = () => {
  const initialGrid = [];
  for (let row = 0; row < NUM_ROWS; row++) {
    const currentRow = [];
    for (let col = 0; col < NUM_COLS; col++) {
      currentRow.push({
        row,
        col,
        isWall: false,
        isStart: row === START_POS.row && col === START_POS.col,
        isEnd: row === END_POS.row && col === END_POS.col,
      });
    }
    initialGrid.push(currentRow);
  }
  return initialGrid;
};

const Grid = forwardRef((props, ref) => {
  const [grid, setGrid] = useState(generateInitialGrid);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  const handleMouseDown = (row, col) => {
    toggleWall(row, col);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;
    toggleWall(row, col);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const toggleWall = (row, col) => {
    const newGrid = grid.map((r) =>
      r.map((node) => {
        if (node.row === row && node.col === col) {
          if (node.isStart || node.isEnd) return node;
          return { ...node, isWall: !node.isWall };
        }
        return node;
      })
    );
    setGrid(newGrid);
  };

  useImperativeHandle(ref, () => ({
    getGridData: () => ({
      grid,
      startNode: grid[START_POS.row][START_POS.col],
      endNode: grid[END_POS.row][END_POS.col],
    }),
  }));

  return (
    <div
      className="flex flex-col items-center p-4 gap-1 select-none"
      onMouseLeave={handleMouseUp}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {row.map((node) => (
            <Node
              key={`${node.row}-${node.col}`}
              {...node}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
              onMouseUp={handleMouseUp}
            />
          ))}
        </div>
      ))}
    </div>
  );
});

export default Grid;
