"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.average = average;
exports.distinct = distinct;
exports.filter = filter;
exports.includes = includes;
exports.max = max;
exports.min = min;
exports.shuffle = shuffle;
exports.sort = sort;
exports.sum = sum;
exports.transform = transform;
function sort(array) {
  return array.sort((a, b) => a - b);
}
function filter(array, predicate) {
  return array.filter(predicate);
}
function transform(array, transformer) {
  return array.map(transformer);
}
function includes(array, element) {
  return array.indexOf(element) !== -1;
}
function min(array) {
  return array.length ? Math.min(...array) : undefined;
}
function max(array) {
  return array.length ? Math.max(...array) : undefined;
}
function sum(array) {
  return array.reduce((acc, cur) => acc + cur, 0);
}
function average(array) {
  return array.length ? sum(array) / array.length : 0;
}
function distinct(array) {
  return Array.from(new Set(array));
}
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzb3J0IiwiYXJyYXkiLCJhIiwiYiIsImZpbHRlciIsInByZWRpY2F0ZSIsInRyYW5zZm9ybSIsInRyYW5zZm9ybWVyIiwibWFwIiwiaW5jbHVkZXMiLCJlbGVtZW50IiwiaW5kZXhPZiIsIm1pbiIsImxlbmd0aCIsIk1hdGgiLCJ1bmRlZmluZWQiLCJtYXgiLCJzdW0iLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJhdmVyYWdlIiwiZGlzdGluY3QiLCJBcnJheSIsImZyb20iLCJTZXQiLCJzaHVmZmxlIiwic2h1ZmZsZWQiLCJpIiwiaiIsImZsb29yIiwicmFuZG9tIl0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzb3J0KGFycmF5OiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgcmV0dXJuIGFycmF5LnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheTogbnVtYmVyW10sIHByZWRpY2F0ZTogKG46IG51bWJlcikgPT4gYm9vbGVhbik6IG51bWJlcltdIHtcbiAgcmV0dXJuIGFycmF5LmZpbHRlcihwcmVkaWNhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKGFycmF5OiBudW1iZXJbXSwgdHJhbnNmb3JtZXI6IChuOiBudW1iZXIpID0+IG51bWJlcik6IG51bWJlcltdIHtcbiAgcmV0dXJuIGFycmF5Lm1hcCh0cmFuc2Zvcm1lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlcyhhcnJheTogbnVtYmVyW10sIGVsZW1lbnQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gYXJyYXkuaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW4oYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGFycmF5Lmxlbmd0aCA/IE1hdGgubWluKC4uLmFycmF5KSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1heChhcnJheTogbnVtYmVyW10pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICByZXR1cm4gYXJyYXkubGVuZ3RoID8gTWF0aC5tYXgoLi4uYXJyYXkpIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIsIDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXZlcmFnZShhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xuICByZXR1cm4gYXJyYXkubGVuZ3RoID8gc3VtKGFycmF5KSAvIGFycmF5Lmxlbmd0aCA6IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0aW5jdChhcnJheTogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXkpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGUoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICBjb25zdCBzaHVmZmxlZCA9IFsuLi5hcnJheV07XG4gIGZvciAobGV0IGkgPSBzaHVmZmxlZC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgIFtzaHVmZmxlZFtpXSwgc2h1ZmZsZWRbal1dID0gW3NodWZmbGVkW2pdLCBzaHVmZmxlZFtpXV07XG4gIH1cbiAgcmV0dXJuIHNodWZmbGVkO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxTQUFTQSxJQUFJLENBQUNDLEtBQWUsRUFBWTtFQUM5QyxPQUFPQSxLQUFLLENBQUNELElBQUksQ0FBQyxDQUFDRSxDQUFDLEVBQUVDLENBQUMsS0FBS0QsQ0FBQyxHQUFHQyxDQUFDLENBQUM7QUFDcEM7QUFFTyxTQUFTQyxNQUFNLENBQUNILEtBQWUsRUFBRUksU0FBaUMsRUFBWTtFQUNuRixPQUFPSixLQUFLLENBQUNHLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO0FBQ2hDO0FBRU8sU0FBU0MsU0FBUyxDQUFDTCxLQUFlLEVBQUVNLFdBQWtDLEVBQVk7RUFDdkYsT0FBT04sS0FBSyxDQUFDTyxHQUFHLENBQUNELFdBQVcsQ0FBQztBQUMvQjtBQUVPLFNBQVNFLFFBQVEsQ0FBQ1IsS0FBZSxFQUFFUyxPQUFlLEVBQVc7RUFDbEUsT0FBT1QsS0FBSyxDQUFDVSxPQUFPLENBQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QztBQUVPLFNBQVNFLEdBQUcsQ0FBQ1gsS0FBZSxFQUFzQjtFQUN2RCxPQUFPQSxLQUFLLENBQUNZLE1BQU0sR0FBR0MsSUFBSSxDQUFDRixHQUFHLENBQUMsR0FBR1gsS0FBSyxDQUFDLEdBQUdjLFNBQVM7QUFDdEQ7QUFFTyxTQUFTQyxHQUFHLENBQUNmLEtBQWUsRUFBc0I7RUFDdkQsT0FBT0EsS0FBSyxDQUFDWSxNQUFNLEdBQUdDLElBQUksQ0FBQ0UsR0FBRyxDQUFDLEdBQUdmLEtBQUssQ0FBQyxHQUFHYyxTQUFTO0FBQ3REO0FBRU8sU0FBU0UsR0FBRyxDQUFDaEIsS0FBZSxFQUFVO0VBQzNDLE9BQU9BLEtBQUssQ0FBQ2lCLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsS0FBS0QsR0FBRyxHQUFHQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2pEO0FBRU8sU0FBU0MsT0FBTyxDQUFDcEIsS0FBZSxFQUFVO0VBQy9DLE9BQU9BLEtBQUssQ0FBQ1ksTUFBTSxHQUFHSSxHQUFHLENBQUNoQixLQUFLLENBQUMsR0FBR0EsS0FBSyxDQUFDWSxNQUFNLEdBQUcsQ0FBQztBQUNyRDtBQUVPLFNBQVNTLFFBQVEsQ0FBQ3JCLEtBQWUsRUFBWTtFQUNsRCxPQUFPc0IsS0FBSyxDQUFDQyxJQUFJLENBQUMsSUFBSUMsR0FBRyxDQUFDeEIsS0FBSyxDQUFDLENBQUM7QUFDbkM7QUFFTyxTQUFTeUIsT0FBTyxDQUFDekIsS0FBZSxFQUFZO0VBQ2pELE1BQU0wQixRQUFRLEdBQUcsQ0FBQyxHQUFHMUIsS0FBSyxDQUFDO0VBQzNCLEtBQUssSUFBSTJCLENBQUMsR0FBR0QsUUFBUSxDQUFDZCxNQUFNLEdBQUcsQ0FBQyxFQUFFZSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtJQUM1QyxNQUFNQyxDQUFDLEdBQUdmLElBQUksQ0FBQ2dCLEtBQUssQ0FBQ2hCLElBQUksQ0FBQ2lCLE1BQU0sRUFBRSxJQUFJSCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQ0QsUUFBUSxDQUFDQyxDQUFDLENBQUMsRUFBRUQsUUFBUSxDQUFDRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNGLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDLEVBQUVGLFFBQVEsQ0FBQ0MsQ0FBQyxDQUFDLENBQUM7RUFDekQ7RUFDQSxPQUFPRCxRQUFRO0FBQ2pCIn0=