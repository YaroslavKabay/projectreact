// let getAlbums = fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(value => value.json());
// export {getAlbums}




let getAlbums = fetch('https://api.themoviedb.org/3/discover/movie?api_key=200eeac4215449ec08f2c5beb7514d01&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    .then(value => value.json());
export {getAlbums}