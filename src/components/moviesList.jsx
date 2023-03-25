import { useState, useEffect } from "react";
import {useNavigate,useLocation} from "react-router-dom";

import '../styles/moviesList.css'

const MoviesList = () => {
    let [movies, setMovies] = useState([])

    //to fetch the route value
    let location = useLocation()

    //to get route parameter

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:4000/Movies")
            let data = await response.json()
            setMovies(data)
        }
        fetchData()
    },[movies])

    let navigate = useNavigate()

    let read=(Metascore)=>{
        if (location.pathname == '/admin/movies-list'){
        navigate(`/admin/movies-list/${Metascore}`)
     }else{
        navigate(`/user/movies-list/${Metascore}`)
    }
}
     
    let handleDelete=(Title,id)=>{
    //  setBooks(books.filter(x=>x.id!=id))
     fetch(`http://localhost:4000/Movies/${id}`,{
        method:'DELETE'
     })
     alert(`${Title} wii be deleted permently`)//to delete all books from the server permenently

    //  alert(`${id} has been deleted`)
    }
    return (
        <div className="bookList">
            <h1 >Movies List:{movies.length}</h1>
            <div className="books_section">
                {movies.map((data) => (
                    <div className="Avvikutti">
                        <div className="arrangement">

                            <div className="images">
                                <img src={data.Images} alt="" />
                            </div>
 
                            <div className="twinkle">
                        <h2>{data.Title}</h2>
                        <h6>Director:{data.Director}</h6>
                        <h6>Genre:{data.Genre}</h6>
                        <h6>Released:{data.Released}</h6>
                        <h6>Language:{data.Language}</h6>
                        
                        <a href=""><button className="btn1"      onClick={()=>read(data.Metascore)}>Know about Movies</button></a>
                        {location.pathname == '/admin/movies-list' && <button  className="btn2" onClick={()=>handleDelete(data.Title,data.id)}>Delete</button>}
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MoviesList;