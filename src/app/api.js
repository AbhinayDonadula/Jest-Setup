export const getUser = () => {
    console.log('getting user');

    return fetch('/user').then((resp) => resp.json());
};
