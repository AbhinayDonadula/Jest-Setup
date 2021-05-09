import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { getQueriesForElement } from '@testing-library/dom';
import App from '../app/App';
import { getTodoAPI as mockGetTodoAPI } from '../app/api';

expect.extend(toHaveNoViolations);
jest.mock('../app/api');

describe('App test cases', () => {
    const testWith = 'Jest is the best';

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
        const { getByTitle, debug } = render(<App title="Jest is the best" />);
        debug();

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

    // mock api test
    test.only('mock api call', async () => {
        mockGetTodoAPI.mockResolvedValueOnce({ data: { todo: [] } });
        const { getByRole, getByText } = render(<App />);

        const btn = getByText('Get Todos');
        fireEvent.click(btn);
        expect(mockGetTodoAPI).toHaveBeenCalledTimes(1);
        await waitFor(() => {
            expect(getByRole('banner')).toHaveTextContent('got my response');
        });
    });
});
