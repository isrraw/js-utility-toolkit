// utils.js — JavaScript ES2020+ Utility Toolkit
// Lecture 02 — CS-408 Advanced Web Development

// 1. Optional Chaining (?.) ─────────────────────────────
export function getUserCity(user) {
  return user?.address?.city ?? 'City not found';
}

// 2. Destructuring + Rest/Spread ─────────────────────────
export function mergeConfig(defaults, ...overrides) {
  return Object.assign({}, defaults, ...overrides);
}

// 3. Async/Await with Error Handling ─────────────────────
export async function fetchUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const { name, email } = await res.json();
    return { name, email };
  } catch (err) {
    return { error: err.message };
  }
}

// 4. Closure — Counter Factory ───────────────────────────
export function createCounter(start = 0) {
  let count = start;
  return {
    increment: () => ++count,
    reset: () => { count = start; },
    value: () => count
  };
}

// 5. Dynamic Import (simulate lazy module loading)
export async function loadFormatter() {
  // In a real project: const mod = await import('./formatter.js');
  return { format: (str) => str.trim().toUpperCase() };
}

// 6. String utility using rest params
export function joinWords(separator, ...words) {
  return words.filter(Boolean).join(separator);
}
// 7. Simple greeting function (My custom utility)
export function sayHello(name) {
  return `Hello, ${name}!`;
}