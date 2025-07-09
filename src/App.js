import React, { useRef } from 'react';
import Grid from './Grid';
import { bfs } from './algorithms/bfs';
import { dfs } from './algorithms/dfs';
import { dijkstra } from './algorithms/dijkstra';
import { aStar } from './algorithms/aStar';
import { animateSearch } from './visualize';

function App() {
  const gridRef = useRef();

  const handleVisualize = (algorithm) => {
    const { grid, startNode, endNode } = gridRef.current.getGridData();
    let result;

    switch (algorithm) {
      case 'bfs':
        result = bfs(grid, startNode, endNode);
        break;
      case 'dfs':
        result = dfs(grid, startNode, endNode);
        break;
      case 'dijkstra':
        result = dijkstra(grid, startNode, endNode);
        break;
      case 'astar':
        result = aStar(grid, startNode, endNode);
        break;
      default:
        return;
    }

    animateSearch(result.visitedNodes, result.path);
  };

  const handleClearPath = () => {
    const { grid } = gridRef.current.getGridData();
    grid.forEach((row) => {
      row.forEach((node) => {
        const el = document.getElementById(`node-${node.row}-${node.col}`);
        if (el && !node.isWall && !node.isStart && !node.isEnd) {
          el.classList.remove('bg-blue-400', 'bg-yellow-300');
          el.classList.add('bg-white');
        }
      });
    });
  };

  const handleResetGrid = () => {
    window.location.reload();
  };

  return (
    <div
      className="min-h-screen text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3b3c36, #1a1c1d, #002147)',
        backgroundSize: '300% 300%',
        animation: 'gradient-x 15s ease infinite',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="text-center p-4">
        <h1 className="text-3xl font-bold my-4 drop-shadow">Pathfinding Visualizer</h1>

        <div className="flex justify-center gap-4 my-4 flex-wrap">
          <button
            onClick={() => handleVisualize('bfs')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Visualize BFS
          </button>
          <button
            onClick={() => handleVisualize('dfs')}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Visualize DFS
          </button>
          <button
            onClick={() => handleVisualize('dijkstra')}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Visualize Dijkstra
          </button>
          <button
            onClick={() => handleVisualize('astar')}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Visualize A*
          </button>
          <button
            onClick={handleClearPath}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            Clear Path
          </button>
          <button
            onClick={handleResetGrid}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Reset Grid
          </button>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 flex-wrap mb-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-500 border border-gray-600 rounded-sm" />
            <span>Start</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-red-500 border border-gray-600 rounded-sm" />
            <span>End</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-800 border border-gray-600 rounded-sm" />
            <span>Wall</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-blue-400 border border-gray-600 rounded-sm" />
            <span>Visited</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-yellow-300 border border-gray-600 rounded-sm" />
            <span>Path</span>
          </div>
        </div>

        <Grid ref={gridRef} />
      </div>
    </div>
  );
}

export default App;
