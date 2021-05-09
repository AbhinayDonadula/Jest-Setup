import PropTypes from 'prop-types';
import React from 'react';
import { getTodoAPI } from './api';

function App({ title }) {
    const [val, setVal] = React.useState('');
    const [resp, setResp] = React.useState(false);
    const handleChange = (e) => {
        setVal(e.target.value);
    };

    const getTodos = async () => {
        await getTodoAPI();
        setResp(true);
    };

    return (
        <div>
            <span title={title}>{title}</span>
            <form action="">
                <input
                    value={val}
                    onChange={handleChange}
                    placeholder="type here"
                />
                <button onClick={getTodos} type="button">
                    Get Todos
                </button>
            </form>

            {val.length ? <span role="alert">hi</span> : null}
            {resp ? <span role="banner">got my response</span> : null}
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
