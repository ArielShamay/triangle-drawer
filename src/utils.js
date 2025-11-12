/**
 * Pure utility functions for Triangle Drawer
 * These functions are testable in Node.js environment
 */

/**
 * Get the last three points from the points array
 * @param {Array<{x: number, y: number}>} pointsArray - Array of points
 * @returns {Array<{x: number, y: number}>|null} Last three points or null
 */
export function getLastThreePoints(pointsArray) {
    if (!pointsArray || pointsArray.length < 3) {
        return null;
    }
    return pointsArray.slice(-3);
}

/**
 * Calculate if a triangle should be drawn based on points count
 * @param {number} pointsCount - Current number of points
 * @returns {boolean} True if triangle should be drawn
 */
export function shouldDrawTriangle(pointsCount) {
    return pointsCount > 0 && pointsCount % 3 === 0;
}

/**
 * Convert mouse event coordinates to canvas coordinates
 * @param {Object} event - Mouse event object with clientX, clientY
 * @param {Object} rect - Canvas bounding rectangle
 * @returns {{x: number, y: number}} Canvas coordinates
 */
export function eventToCanvasCoords(event, rect) {
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

/**
 * Calculate triangle count from points array
 * @param {Array} pointsArray - Array of points
 * @returns {number} Number of complete triangles
 */
export function getTriangleCount(pointsArray) {
    if (!pointsArray) return 0;
    return Math.floor(pointsArray.length / 3);
}
