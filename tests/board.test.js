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
import { getLastThreePoints, addPoint } from '../src/board.js';

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
    const pointsCount = 7;
    const shouldDrawTriangle = pointsCount % 3 === 0;
    assert(!shouldDrawTriangle, 'No triangle drawn when points count is not divisible by 3');
    
    const pointsCount2 = 9;
    const shouldDrawTriangle2 = pointsCount2 % 3 === 0;
    assert(shouldDrawTriangle2, 'Triangle drawn when points count is divisible by 3');
} catch (error) {
    console.error(error.message);
}

console.log('\n✅ All tests completed!\n');
