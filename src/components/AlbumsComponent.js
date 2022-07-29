// import {useEffect,useState} from "react"
//
// import {AlbumComponent} from "../components"
// import {getAlbums} from "../services"
//
// export  function AlbumsComponent(){
//     let [albums,setAlbums] = useState([]);
//
//     useEffect( () =>{
//         getAlbums.then((value)=> setAlbums([...value]))
//     },[]);
//
//
//
//
//     return (
//         <div>
//             {
//                 albums.map(album => <AlbumComponent album={album} key={album.id}/>)
//             }
//         </div>
//     );
// }


import {useEffect,useState} from "react"

import {AlbumComponent} from "../components"
import {getAlbums} from "../services"

export  function AlbumsComponent(){
    let [albums,setAlbums] = useState([]);

    useEffect( () =>{
        getAlbums.then((value)=> setAlbums([...value]))
    },[]);


    return (
        <div>
            {
                albums.map(album => <AlbumComponent album={album} key={album.results.id}/>)
            }
        </div>
    );
}