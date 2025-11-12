let ctx = null;

/**
 * Initialize canvas context and size
 * @param {HTMLCanvasElement} canvas - The canvas element
 */
export function initCanvas(canvas) {
    if (!canvas) return;
    
    ctx = canvas.getContext('2d');
    
    // Set canvas size to fill available space
    resizeCanvas(canvas);
}

/**
 * Resize canvas to fill container
 * @param {HTMLCanvasElement} canvas - The canvas element
 */
function resizeCanvas(canvas) {
    const rect = canvas.getBoundingClientRect();
    
    // Account for device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    // Scale context to match device pixel ratio
    ctx.scale(dpr, dpr);
    
    // Set canvas display size
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
}

/**
 * Draw a point on the canvas
 * @param {HTMLCanvasElement} canvas - The canvas element
 * @param {{x: number, y: number}} point - The point to draw
 */
export function drawPoint(canvas, point) {
    if (!ctx) return;
    
    ctx.fillStyle = '#e74c3c';
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Add a white border for better visibility
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
}

/**
 * Draw a triangle connecting three points
 * @param {HTMLCanvasElement} canvas - The canvas element
 * @param {Array<{x: number, y: number}>} trianglePoints - Array of three points
 */
export function drawTriangle(canvas, trianglePoints) {
    if (!ctx || !trianglePoints || trianglePoints.length !== 3) return;
    
    // Draw the triangle fill
    ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
    ctx.beginPath();
    ctx.moveTo(trianglePoints[0].x, trianglePoints[0].y);
    ctx.lineTo(trianglePoints[1].x, trianglePoints[1].y);
    ctx.lineTo(trianglePoints[2].x, trianglePoints[2].y);
    ctx.closePath();
    ctx.fill();
    
    // Draw the triangle border
    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 2;
    ctx.stroke();
}

/**
 * Clear the entire canvas
 * @param {HTMLCanvasElement} canvas - The canvas element
 */
export function clearCanvas(canvas) {
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
}
