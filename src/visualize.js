export function animateSearch(visitedNodes, path) {
  for (let i = 0; i <= visitedNodes.length; i++) {
    if (i === visitedNodes.length) {
      setTimeout(() => animatePath(path), 10 * i);
    } else {
      const node = visitedNodes[i];
      setTimeout(() => {
        const el = document.getElementById(`node-${node.row}-${node.col}`);
        if (el && !el.classList.contains('bg-green-500') && !el.classList.contains('bg-red-500')) {
          el.classList.remove('bg-white');
          el.classList.add('bg-blue-400');
        }
      }, 10 * i);
    }
  }
}

function animatePath(path) {
  for (let i = 0; i < path.length; i++) {
    const node = path[i];
    setTimeout(() => {
      const el = document.getElementById(`node-${node.row}-${node.col}`);
      if (el && !el.classList.contains('bg-green-500') && !el.classList.contains('bg-red-500')) {
        el.classList.remove('bg-blue-400');
        el.classList.add('bg-yellow-300');
      }
    }, 40 * i);
  }
}
