Pathfinding-Visualizer
---

````markdown
# Pathfinding Visualizer

An interactive pathfinding visualizer built with **React** and **Tailwind CSS**.
This tool helps you visualize how pathfinding algorithms work step by step in a 2D grid.

### 🌐 Live Overview

https://destructorbawa.github.io/Pathfinding-Visualizer/

## Features

- Click and drag to draw **walls**
- Supports multiple algorithms:
  - 🔵 **BFS (Breadth-First Search)**
  - 🟣 **DFS (Depth-First Search)**
  - 🟡 **Dijkstra’s Algorithm**
  - 🟢 **A\* (A-Star) Algorithm**
- Highlights:
  - Start node (🟩), end node (🟥)
  - Visited nodes (🔷) and shortest path (🟨)
- Clear path or reset grid with a single click
- Smooth animations
- Clean dark gradient background with responsive design



## Technologies Used

- React (Create React App)
- Tailwind CSS
- JavaScript (ES6+)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pathfinding-visualizer.git
cd pathfinding-visualizer
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure (Simplified)

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

## License

This project is licensed under the [MIT License](./LICENSE).

## Acknowledgements

* Bootstrapped with [Create React App](https://create-react-app.dev/)
* Inspired by visual algorithm tools like PathfindingVisualizer and CS animations

---


