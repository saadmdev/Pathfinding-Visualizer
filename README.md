
---

````markdown
# Pathfinding Visualizer

An interactive pathfinding visualizer built with **React** and **Tailwind CSS**.  
This tool allows users to understand how pathfinding algorithms operate by visualizing their behavior step by step in a dynamic grid.

---

### Live Demo  
[View Project Live](https://destructorbawa.github.io/Pathfinding-Visualizer/)

---

## Features

- Click and drag to draw walls (obstacles)
- Supports multiple pathfinding algorithms:
  - Breadth-First Search (BFS)
  - Depth-First Search (DFS)
  - Dijkstra’s Algorithm
  - A* (A-Star) Algorithm
- Visual distinctions between:
  - Start and end nodes
  - Visited nodes and the shortest path
- Clear the current path or reset the entire grid
- Smooth animations and transitions
- Fully responsive layout with a modern dark theme

---

## Technologies Used

- React (with Create React App)
- Tailwind CSS
- JavaScript (ES6+)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/destructorbawa/Pathfinding-Visualizer.git
cd pathfinding-visualizer
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

Then open `http://localhost:3000` in your browser to view the application.

---

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   └── Node.jsx
│   ├── algorithms/
│   │   ├── bfs.js
│   │   ├── dfs.js
│   │   ├── dijkstra.js
│   │   └── aStar.js
│   ├── App.js
│   ├── Grid.js
│   ├── visualize.js
│   └── index.css
├── package.json
└── README.md
```

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Acknowledgements

* Bootstrapped with [Create React App](https://create-react-app.dev/)
* Inspired by educational visualizations like PathfindingVisualizer and CS animations

````

---
