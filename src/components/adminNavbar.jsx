

import '../styles/adminNavbar.css';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <div className="adminNav">
       <img  height="80px" width="90px" src="https://www.pngitem.com/pimgs/m/466-4663233_cinema-icon-cinema-logo-png-transparent-png.png" alt="" />
       
      <div className="logo">
    {/* <h1>CINIADDA</h1> */}
         {/* <img  height="50px"   width="70px" */}
        {/* src="https://mir-s3-cdn-cf.behance.net/projects/404/578c0d150504693.Y3JvcCw3MjEsNTY0LDQyLDMz.png" alt="" />  */}
      
        <h1>CINI ADDA</h1>
      </div>

      <div className="addbook">
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/admin/add-movies">Add Movies</Link></li>
        <li><Link to="/admin/movies-list">Movies list</Link></li>
        
        <li><Link to="/">Logout</Link></li>
      </div>

    </div>
  );
}

export default AdminNavbar;