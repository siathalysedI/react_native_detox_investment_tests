module.exports = {
    preset: "jest-expo",
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    testMatch: ["<rootDir>/src/**/*.test.js"], // Todos os testes não-E2E
    testPathIgnorePatterns: ["/node_modules/", "/e2e/"], // Ignorar E2E
    transformIgnorePatterns: [
      "node_modules/(?!(react-native|@react-native|expo(nent)?|@expo(nent)?)/)"
    ],
  };
  