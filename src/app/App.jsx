import PropTypes from 'prop-types';
import React from 'react';

function App({ title }) {
    return (
        <div>
            <span>{title}</span>
        </div>
    );
}
App.propTypes = {
    title: PropTypes.string,
};

App.defaultProps = {
    title: 'Abhinay',
};
export default App;
