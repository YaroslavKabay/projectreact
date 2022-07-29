let getComments = fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json());
export {getComments}