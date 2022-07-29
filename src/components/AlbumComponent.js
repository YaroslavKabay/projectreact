// export function AlbumComponent({album}){
//     return (
//         <div>
//             {album.title}
//         </div>
//     );
// }


export function AlbumComponent({album}){
    return (
        <div>
            {album.results.original_title}
        </div>
    );
}

