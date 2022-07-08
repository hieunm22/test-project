/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/src/PasswordWithIcon.tsx"
  },
  testEnvironment: "node"
}
