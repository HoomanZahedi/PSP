import '@testing-library/jest-dom/extend-expect';

// Mock functions, add any global setup here
global.console = {
  ...console,
  log: jest.fn(), // example of mocking console.log in tests
};