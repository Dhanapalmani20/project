// import ColorGame from "./ColorGame";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import { NavLink } from "react-router";
import { MovieDetails } from "./MovieDetails";


export default function App(){
  return(
<>
<nav>
        <Link to="/movie">MoviesList</Link>
      </nav>
<Routes>
  <Route path="Movie" element={<MovieDetails/>}/>
</Routes> 
</>
  );
}
