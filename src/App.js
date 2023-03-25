
import './App.css';
// import 'bootstrap/dist/'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLogin from './components/adminLogin';

import AdminPortal from './components/adminPortal';
import AdminNavbar from './components/adminNavbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AdminNavbar />
        <Routes>

          <Route path='/' element={<AdminLogin />} />
          <Route path='/admin/*' element={<AdminPortal />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
