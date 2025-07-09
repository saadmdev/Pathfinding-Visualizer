export function bfs(grid, startNode, endNode) {
  const visitedNodes = [];
  const queue = [startNode];
  const visited = new Set();
  const prev = new Map();

  visited.add(`${startNode.row}-${startNode.col}`);

  while (queue.length > 0) {
    const current = queue.shift();
    visitedNodes.push(current);

    if (current.row === endNode.row && current.col === endNode.col) break;

    const neighbors = getNeighbors(current, grid);
    for (let neighbor of neighbors) {
      const key = `${neighbor.row}-${neighbor.col}`;
      if (!visited.has(key) && !neighbor.isWall) {
        queue.push(neighbor);
        visited.add(key);
        prev.set(key, current);
      }
    }
  }

  // Path reconstruction
  const path = [];
  let current = endNode;
  const endKey = `${endNode.row}-${endNode.col}`;

  if (!prev.has(endKey)) {
    // No path found
    return { visitedNodes, path }; // path will be empty
  }

  while (current && prev.has(`${current.row}-${current.col}`)) {
    path.unshift(current);
    current = prev.get(`${current.row}-${current.col}`);
  }
  path.unshift(startNode); // include start node

  return { visitedNodes, path };
}

function getNeighbors(node, grid) {
  const directions = [
    [0, 1], [1, 0], [-1, 0], [0, -1]
  ];
  const neighbors = [];

  for (let [dx, dy] of directions) {
    const newRow = node.row + dx;
    const newCol = node.col + dy;
    if (
      newRow >= 0 &&
      newCol >= 0 &&
      newRow < grid.length &&
      newCol < grid[0].length
    ) {
      neighbors.push(grid[newRow][newCol]);
    }
  }

  return neighbors;
}
