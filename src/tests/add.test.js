const add = (a, b) => a + b;
const genGreeting = name => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test('should return string containing name', () => {
  const result = genGreeting('Lukas');
  expect(result).toBe('Hello Lukas!');
});
