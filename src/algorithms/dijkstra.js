export function dijkstra(grid, startNode, endNode) {
  const visitedNodes = [];
  const unvisited = [];
  const distances = new Map();
  const prev = new Map();

  for (let row of grid) {
    for (let node of row) {
      const key = `${node.row}-${node.col}`;
      distances.set(key, Infinity);
      unvisited.push(node);
    }
  }

  const startKey = `${startNode.row}-${startNode.col}`;
  distances.set(startKey, 0);

  while (unvisited.length > 0) {
    unvisited.sort((a, b) => distances.get(`${a.row}-${a.col}`) - distances.get(`${b.row}-${b.col}`));
    const current = unvisited.shift();
    const key = `${current.row}-${current.col}`;

    if (current.isWall) continue;
    if (distances.get(key) === Infinity) break;

    visitedNodes.push(current);
    if (current === endNode) break;

    for (let neighbor of getNeighbors(current, grid)) {
      const neighborKey = `${neighbor.row}-${neighbor.col}`;
      const alt = distances.get(key) + 1;
      if (alt < distances.get(neighborKey)) {
        distances.set(neighborKey, alt);
        prev.set(neighborKey, current);
      }
    }
  }

  const path = [];
  let current = endNode;
  while (current && prev.has(`${current.row}-${current.col}`)) {
    path.unshift(current);
    current = prev.get(`${current.row}-${current.col}`);
  }
  path.unshift(startNode);

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
