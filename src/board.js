import { drawPoint, drawTriangle, clearCanvas, initCanvas } from './renderer.js';
import { getLastThreePoints, shouldDrawTriangle, getTriangleCount } from './utils.js';

// State management
let points = [];
let history = []; // For undo functionality
const maxHistorySize = 50;

// Initialize
const canvas = document.getElementById('drawingCanvas');
const pointCountEl = document.getElementById('pointCount');
const triangleCountEl = document.getElementById('triangleCount');
const clearBtn = document.getElementById('clearBtn');
const undoBtn = document.getElementById('undoBtn');
const exportBtn = document.getElementById('exportBtn');

initCanvas(canvas);

// Load saved state from localStorage
loadState();

// Event listeners
canvas.addEventListener('click', handleClick);
clearBtn.addEventListener('click', clearBoard);
undoBtn.addEventListener('click', undo);
exportBtn.addEventListener('click', exportPNG);
window.addEventListener('resize', handleResize);

/**
 * Handle canvas click event
 * @param {MouseEvent} event - The click event
 */
function handleClick(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    addPoint(x, y);
}

/**
 * Add a point to the points array
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 */
export function addPoint(x, y) {
    const point = { x, y };
    
    // Save current state to history before adding new point
    saveToHistory();
    
    points.push(point);
    drawPoint(canvas, point);
    
    // Check if we should draw a triangle
    if (shouldDrawTriangle(points.length)) {
        const trianglePoints = getLastThreePoints(points);
        if (trianglePoints) {
            drawTriangle(canvas, trianglePoints);
        }
    }
    
    updateUI();
    saveState();
}

/**
 * Get the last three points from the points array
 * @param {Array<{x: number, y: number}>} pointsArray - Array of points
 * @returns {Array<{x: number, y: number}>|null} Last three points or null
 * @deprecated Use the version from utils.js instead
 */
export { getLastThreePoints } from './utils.js';

/**
 * Clear the entire board
 */
function clearBoard() {
    if (points.length === 0) return;
    
    saveToHistory();
    points = [];
    clearCanvas(canvas);
    updateUI();
    saveState();
}

/**
 * Undo last action
 */
function undo() {
    if (history.length === 0) return;
    
    const previousState = history.pop();
    points = previousState;
    
    // Redraw everything
    redrawAll();
    updateUI();
    saveState();
}

/**
 * Save current state to history
 */
function saveToHistory() {
    history.push([...points]);
    if (history.length > maxHistorySize) {
        history.shift();
    }
}

/**
 * Redraw all points and triangles
 */
function redrawAll() {
    clearCanvas(canvas);
    
    points.forEach((point, index) => {
        drawPoint(canvas, point);
        
        // Draw triangles for every complete set of 3 points
        if ((index + 1) % 3 === 0 && index >= 2) {
            const trianglePoints = points.slice(index - 2, index + 1);
            drawTriangle(canvas, trianglePoints);
        }
    });
}

/**
 * Handle window resize
 */
function handleResize() {
    initCanvas(canvas);
    redrawAll();
}

/**
 * Update UI counters
 */
function updateUI() {
    const triangleCount = getTriangleCount(points);
    pointCountEl.textContent = `נקודות: ${points.length}`;
    triangleCountEl.textContent = `משולשים: ${triangleCount}`;
}

/**
 * Export canvas as PNG
 */
function exportPNG() {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `triangle-drawer-${Date.now()}.png`;
    link.href = dataURL;
    link.click();
}

/**
 * Save state to localStorage
 */
function saveState() {
    try {
        localStorage.setItem('triangle-drawer-points', JSON.stringify(points));
    } catch (error) {
        console.error('Failed to save state:', error);
    }
}

/**
 * Load state from localStorage
 */
function loadState() {
    try {
        const saved = localStorage.getItem('triangle-drawer-points');
        if (saved) {
            points = JSON.parse(saved);
            redrawAll();
            updateUI();
        }
    } catch (error) {
        console.error('Failed to load state:', error);
        points = [];
    }
}
