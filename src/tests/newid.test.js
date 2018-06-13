import newId from '../utils/newid'

test('generates incremental id from 0', () => {
  expect(newId()).toBe(0);
  expect(newId()).toBe(1);
  expect(newId()).toBe(2);
  expect(newId()).toBe(3);
  expect(newId()).toBe(4);
  expect(newId()).toBe(5);
});