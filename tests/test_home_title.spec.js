const fs = require('fs');
const path = require('path');

beforeAll(() => {
  const html = fs.readFileSync(
    path.resolve(__dirname, '../views/index.html'),
    'utf8'
  );
  document.documentElement.innerHTML = html;
});

test('title exists', () => {
  expect(document.title).toBe('CI/CD Pipeline Demo');
});


test('?exists?', () => {
  expect(document.title).toBe('?exists?');
});
