import {Link,Routes,Route} from "react-router-dom" ;

import {TodosPage, AlbumsPage, PostsPage,CommentsPage} from "./pages";

function App() {
  return (
      <div >
        <h2> Menu </h2>
        <ul>
          <li><Link to={'/todos'}> todos </Link> </li>
          <li><Link to={'/albums'}> albums </Link> </li>
          <li><Link to={'/comments'}> comments </Link> </li>
        </ul>

        <div>
          <h3>Content</h3>
          <Routes>

            <Route path={'/todos'} element={<TodosPage/>}/>
            <Route path={'/albums'} element={<AlbumsPage/>}/>
            <Route path={'/comments'} element={<CommentsPage/>}>

              <Route path={':id'} element={<PostsPage/>}/>

            </Route>


          </Routes>

        </div>


      </div>);
}

export default App;