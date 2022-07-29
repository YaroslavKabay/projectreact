let getTodos = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(value => value.json());
export {getTodos}