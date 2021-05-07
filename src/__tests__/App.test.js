import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app/App';

test('renders app with title Abhinay', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App title="Jest is the best" />, div);
    expect(div.querySelector('span').innerHTML).toEqualCaseInsensitive(
        'Jest is the Best'
    );
});
