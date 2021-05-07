import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { getQueriesForElement } from '@testing-library/dom';
import App from '../app/App';

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

    test.only('user event - RTL', () => {
        const { getByPlaceholderText, debug, getByRole } = render(
            <App title="Jest is the best" />
        );

        const input = getByPlaceholderText('type here');
        debug(input);
        user.type(input, '20');
        expect(getByRole('alert')).toHaveTextContent('hi');
    });
});
