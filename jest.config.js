module.exports = {
    displayName: 'Abhinay',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.css$': require.resolve('./src/testUtils/style-mock.js'),
    },
    setupFilesAfterEnv: [
        'jest-extended',
        '@testing-library/jest-dom/extend-expect',
    ],
    collectCoverageFrom: ['**/src/app/*.js'],
    coverageThreshold: {
        global: {
            statements: 60,
            branches: 100,
            functions: 45,
            lines: 100,
        },
    },
    projects: ['<rootDir>/jest.config.js', '<rootDir>/jest.lint.js'],
};
