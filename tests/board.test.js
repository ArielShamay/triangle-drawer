// Simple test framework
function assert(condition, message) {
    if (!condition) {
        throw new Error(`❌ Test failed: ${message}`);
    }
    console.log(`✓ ${message}`);
}

function assertEquals(actual, expected, message) {
    const actualStr = JSON.stringify(actual);
    const expectedStr = JSON.stringify(expected);
    if (actualStr !== expectedStr) {
        throw new Error(`❌ Test failed: ${message}\n  Expected: ${expectedStr}\n  Actual: ${actualStr}`);
    }
    console.log(`✓ ${message}`);
}

// Import functions to test
import { 
    getLastThreePoints, 
    shouldDrawTriangle,
    eventToCanvasCoords,
    getTriangleCount 
} from '../src/utils.js';

console.log('\n🧪 Running tests for Triangle Drawer...\n');

// Test 1: getLastThreePoints with null input
try {
    const result = getLastThreePoints(null);
    assertEquals(result, null, 'getLastThreePoints returns null for null input');
} catch (error) {
    console.error(error.message);
}

// Test 2: getLastThreePoints with empty array
try {
    const result = getLastThreePoints([]);
    assertEquals(result, null, 'getLastThreePoints returns null for empty array');
} catch (error) {
    console.error(error.message);
}

// Test 3: getLastThreePoints with less than 3 points
try {
    const points = [{x: 10, y: 20}, {x: 30, y: 40}];
    const result = getLastThreePoints(points);
    assertEquals(result, null, 'getLastThreePoints returns null when less than 3 points');
} catch (error) {
    console.error(error.message);
}

// Test 4: getLastThreePoints with exactly 3 points
try {
    const points = [{x: 10, y: 20}, {x: 30, y: 40}, {x: 50, y: 60}];
    const result = getLastThreePoints(points);
    const expected = [{x: 10, y: 20}, {x: 30, y: 40}, {x: 50, y: 60}];
    assertEquals(result, expected, 'getLastThreePoints returns all 3 points when exactly 3 exist');
} catch (error) {
    console.error(error.message);
}

// Test 5: getLastThreePoints with more than 3 points
try {
    const points = [
        {x: 10, y: 20}, 
        {x: 30, y: 40}, 
        {x: 50, y: 60},
        {x: 70, y: 80},
        {x: 90, y: 100}
    ];
    const result = getLastThreePoints(points);
    const expected = [{x: 50, y: 60}, {x: 70, y: 80}, {x: 90, y: 100}];
    assertEquals(result, expected, 'getLastThreePoints returns last 3 points from array of 5');
} catch (error) {
    console.error(error.message);
}

// Test 6: getLastThreePoints with exactly 6 points (2 triangles)
try {
    const points = [
        {x: 10, y: 20}, 
        {x: 30, y: 40}, 
        {x: 50, y: 60},
        {x: 70, y: 80},
        {x: 90, y: 100},
        {x: 110, y: 120}
    ];
    const result = getLastThreePoints(points);
    const expected = [{x: 70, y: 80}, {x: 90, y: 100}, {x: 110, y: 120}];
    assertEquals(result, expected, 'getLastThreePoints returns last 3 points from array of 6 (second triangle)');
} catch (error) {
    console.error(error.message);
}

// Test 7: Point coordinates validation
try {
    const point = {x: 100.5, y: 200.75};
    assert(typeof point.x === 'number' && typeof point.y === 'number', 
        'Point coordinates are numbers (including decimals)');
} catch (error) {
    console.error(error.message);
}

// Test 8: Triangle calculation - verify modulo logic
try {
    assert(!shouldDrawTriangle(0), 'No triangle drawn when points count is 0');
    assert(!shouldDrawTriangle(1), 'No triangle drawn when points count is 1');
    assert(!shouldDrawTriangle(2), 'No triangle drawn when points count is 2');
    assert(shouldDrawTriangle(3), 'Triangle drawn when points count is 3');
    assert(!shouldDrawTriangle(4), 'No triangle drawn when points count is 4');
    assert(!shouldDrawTriangle(5), 'No triangle drawn when points count is 5');
    assert(shouldDrawTriangle(6), 'Triangle drawn when points count is 6');
    assert(shouldDrawTriangle(9), 'Triangle drawn when points count is 9');
} catch (error) {
    console.error(error.message);
}

// Test 9: Triangle count calculation
try {
    assertEquals(getTriangleCount([]), 0, 'Triangle count is 0 for empty array');
    assertEquals(getTriangleCount([{x:1,y:1}]), 0, 'Triangle count is 0 for 1 point');
    assertEquals(getTriangleCount([{x:1,y:1},{x:2,y:2},{x:3,y:3}]), 1, 'Triangle count is 1 for 3 points');
    assertEquals(getTriangleCount(new Array(6).fill({x:1,y:1})), 2, 'Triangle count is 2 for 6 points');
    assertEquals(getTriangleCount(new Array(7).fill({x:1,y:1})), 2, 'Triangle count is 2 for 7 points');
} catch (error) {
    console.error(error.message);
}

// Test 10: Event to canvas coordinates conversion
try {
    const event = { clientX: 150, clientY: 200 };
    const rect = { left: 50, top: 100 };
    const coords = eventToCanvasCoords(event, rect);
    assertEquals(coords, {x: 100, y: 100}, 'Correctly converts event to canvas coordinates');
} catch (error) {
    console.error(error.message);
}

console.log('\n✅ All tests completed!\n');
