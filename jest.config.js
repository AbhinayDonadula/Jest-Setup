module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.css$': require.resolve('./src/testUtils/style-mock.js'),
    },
    setupFilesAfterEnv: [
        'jest-extended',
        '@testing-library/jest-dom/extend-expect',
    ],
};
