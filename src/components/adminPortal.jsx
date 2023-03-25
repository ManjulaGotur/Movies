
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import AddMovies from './addMovies';

import AdminDashboard from "./adminDashboard";
import AdminNavbar from "./adminNavbar";
import MoviesList from "./moviesList"



const AdminPortal = () => {
    return (  
        <div className="adminPortal">
            {/* <BrowserRouter> */}
       <Routes >
        <Route path='/'   element={<AdminDashboard/>}/>
        <Route path='/movies-list' element={<MoviesList/>}/>   
        <Route  path='/add-movies'  element={<AddMovies/>}/>           
        
        </Routes>
        {/* </BrowserRouter> */}
        </div>
    );
}
 
export default AdminPortal;