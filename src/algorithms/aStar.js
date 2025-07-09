export function aStar(grid, startNode, endNode) {
  const visitedNodes = [];
  const openSet = [startNode];
  const cameFrom = new Map();

  const gScore = {};
  const fScore = {};

  for (let row of grid) {
    for (let node of row) {
      gScore[`${node.row}-${node.col}`] = Infinity;
      fScore[`${node.row}-${node.col}`] = Infinity;
    }
  }

  gScore[`${startNode.row}-${startNode.col}`] = 0;
  fScore[`${startNode.row}-${startNode.col}`] = heuristic(startNode, endNode);

  const visitedSet = new Set();

  while (openSet.length > 0) {
    openSet.sort((a, b) => fScore[`${a.row}-${a.col}`] - fScore[`${b.row}-${b.col}`]);
    const current = openSet.shift();
    visitedNodes.push(current);

    if (current.row === endNode.row && current.col === endNode.col) {
      break;
    }

    for (let neighbor of getNeighbors(current, grid)) {
      const key = `${neighbor.row}-${neighbor.col}`;
      if (neighbor.isWall) continue;

      const tentativeG = gScore[`${current.row}-${current.col}`] + 1;

      if (tentativeG < gScore[key]) {
        cameFrom.set(key, current);
        gScore[key] = tentativeG;
        fScore[key] = tentativeG + heuristic(neighbor, endNode);

        if (!visitedSet.has(key)) {
          openSet.push(neighbor);
          visitedSet.add(key);
        }
      }
    }
  }

  const path = [];
  let current = endNode;
  while (current && cameFrom.has(`${current.row}-${current.col}`)) {
    path.unshift(current);
    current = cameFrom.get(`${current.row}-${current.col}`);
  }
  path.unshift(startNode);

  return { visitedNodes, path };
}

function heuristic(a, b) {
  // Manhattan Distance
  return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
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
