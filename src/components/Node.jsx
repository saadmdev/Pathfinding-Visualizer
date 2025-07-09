import React from 'react';

const Node = ({
  row,
  col,
  isWall,
  isStart,
  isEnd,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}) => {
  let className = 'w-6 h-6 border border-gray-600 transition duration-100';

  if (isStart) className += ' bg-green-500';
  else if (isEnd) className += ' bg-red-500';
  else if (isWall) className += ' bg-gray-800';
  else className += ' bg-white hover:bg-blue-200';

  return (
    <div
      id={`node-${row}-${col}`} // ✅ this is the important part
      className={className}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={onMouseUp}
    />
  );
};

export default Node;
