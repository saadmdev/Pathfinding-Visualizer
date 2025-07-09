# Pathfinding Visualizer

An interactive pathfinding visualizer built with **React** and **Tailwind CSS**.  
This tool helps visualize how pathfinding algorithms work step by step in a 2D grid.

---

### 🌐 Live Demo  
👉 [View Live Project](https://destructorbawa.github.io/Pathfinding-Visualizer/)

---

## ✨ Features

- 🧱 Click and drag to draw **walls**
- ⚙️ Supports multiple algorithms:
  - 🔵 **BFS (Breadth-First Search)**
  - 🟣 **DFS (Depth-First Search)**
  - 🟡 **Dijkstra’s Algorithm**
  - 🟢 **A\* (A-Star) Algorithm**
- 💡 Highlights:
  - Start node (🟩), End node (🟥)
  - Visited nodes (🔷), Shortest path (🟨)
- 🔁 Clear path or reset grid in one click
- ⚡ Smooth animations
- 🌑 Dark gradient responsive design

---

## 🛠 Technologies Used

- React (Create React App)
- Tailwind CSS
- JavaScript (ES6+)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/destructorbawa/Pathfinding-Visualizer.git
cd pathfinding-visualizer
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start Development Server
bash
Copy
Edit
npm start
Visit http://localhost:3000 in your browser.

📁 Project Structure
pgsql
Copy
Edit
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
📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Bootstrapped with Create React App

Inspired by algorithm visualizers like PathfindingVisualizer and CS animations