module.exports = {
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.(ts)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  testMatch: ["**/*.spec.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/lib/"],
  collectCoverage: true,
  verbose: true,
};