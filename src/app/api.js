export const getTodoAPI = () =>
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => {
            setResp(true);
        });
