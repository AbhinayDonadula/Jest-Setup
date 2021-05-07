import PropTypes from 'prop-types';
import React from 'react';

function App({ title }) {
    const [val, setVal] = React.useState('');
    const handleChange = (e) => {
        debugger;
        console.log('##########', e);
        setVal(e.target.value);
    };

    return (
        <div>
            <span title={title}>{title}</span>
            <input
                value={val}
                onChange={handleChange}
                placeholder="type here"
            />
            {val.length ? <span role="alert">hi</span> : null}
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
