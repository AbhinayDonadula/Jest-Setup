import PropTypes from 'prop-types';
import React from 'react';

function App({ title }) {
    const [val, setVal] = React.useState('');
    const handleChange = (e) => {
        setVal(e.target.value);
    };

    return (
        <div>
            <span title={title}>{title}</span>
            <form action="">
                <label htmlFor="abc">Email</label>
                <input
                    id="asdfasd"
                    value={val}
                    onChange={handleChange}
                    placeholder="type here"
                />
            </form>

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
