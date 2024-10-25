import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optional: Setup file for jest-dom
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',  
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!some-esm-package)', // If you have specific ESM packages, add them here
  ],
};

export default config;