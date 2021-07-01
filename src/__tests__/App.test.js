import React from 'react';
import ReactDOM from 'react-dom';
import { render, act } from '@testing-library/react';
import user from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { getQueriesForElement, waitFor } from '@testing-library/dom';
import App from '../app/App';
import { server } from '../app/api/mocks/server';

expect.extend(toHaveNoViolations);

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

jest.mock('../app/api');

describe('test mock service worker', () => {
    test('mock service worker', () => {
        const { container, debug, getByText } = render(<App />);
        expect(container).toBeDefined();
        const btn = getByText(/Get User/i);
        act(() => {
            user.click(btn);
        });
        waitFor(() => {
            debug();
        });
    });
});

describe.skip('App test cases', () => {
    const testWith = 'Jest is the best';
    test.todo('add should render succesfully');

    // mock api test

    test('successfully renders - no RTL', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App title={testWith} />, div);

        // using in built dom selectors
        const span = div.querySelector('span');
        const spanHTML = span.innerHTML;
        expect(spanHTML).toEqualCaseInsensitive(testWith);

        expect(span).toHaveTextContent(testWith);

        // using queries from testing library
        const { getByTitle } = getQueriesForElement(div);
        const spanEl = getByTitle(testWith);
        expect(spanEl).toHaveTextContent(testWith);
    });

    test('successfully renders with RTL', () => {
        const { getByTitle } = render(<App title="Jest is the best" />);

        const spanEl = getByTitle(testWith);
        expect(spanEl).toHaveTextContent(testWith);
    });

    test('user event - RTL', () => {
        const { getByPlaceholderText, getByRole, queryByRole } = render(
            <App title="Jest is the best" />
        );
        expect(queryByRole('alert')).toBeNull();

        const input = getByPlaceholderText('type here');
        user.type(input, '20');
        expect(queryByRole('alert')).not.toBeNull();
        expect(getByRole('alert')).toHaveTextContent('hi');
    });

    // accesibility tests
    test('jest axe accesibility test case', async () => {
        const { container } = render(<App title="Jest is the best" />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
