export function dfs(grid, startNode, endNode) {
  const visitedNodes = [];
  const path = [];
  const visited = new Set();
  const prev = new Map();

  const found = dfsRecursive(startNode, grid, endNode, visited, visitedNodes, prev);
  
  // Reconstruct path only if end was found
  if (found) {
    let current = endNode;
    while (current && prev.has(`${current.row}-${current.col}`)) {
      path.unshift(current);
      current = prev.get(`${current.row}-${current.col}`);
    }
    path.unshift(startNode); // optional
  }

  return { visitedNodes, path };
}

function dfsRecursive(node, grid, endNode, visited, visitedNodes, prev) {
  const key = `${node.row}-${node.col}`;
  if (visited.has(key) || node.isWall) return false;

  visited.add(key);
  visitedNodes.push(node);

  if (node === endNode) return true;

  const neighbors = getNeighbors(node, grid);
  for (let neighbor of neighbors) {
    const neighborKey = `${neighbor.row}-${neighbor.col}`;
    if (!visited.has(neighborKey)) {
      prev.set(neighborKey, node);
      if (dfsRecursive(neighbor, grid, endNode, visited, visitedNodes, prev)) {
        return true;
      }
    }
  }

  return false;
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
