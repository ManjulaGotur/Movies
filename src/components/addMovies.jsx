import{useState} from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addMovies.css';


const AddMovies = () => {
   //title,Genre,author,Images.
   let[title,setTitle] =useState("")
   let[Director,setDirector] =useState("")
   let[Genre,setGenre] =useState("")
   let[Language,setLanguage] =useState("")
   let[Released,setReleased] =useState("")

   let[Images,setImages] =useState("")


   let navigate = useNavigate()

   let handleSubmit=(e)=>{
       e.preventDefault();
       //data to be posted
       let moviesData ={title,Director,Genre,Language,Images} //7 values should be stored by giving any name
       //posting to server
       fetch('http://localhost:4000/Movies',{
       method:'POST',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify(moviesData)
   })
   alert(`${title} movies added successfully`)
   navigate('/admin/movies-list')
}


   return ( 
       <div className="AddMoviess_section">
           <h1>Add Movies</h1>
           <div className="form">
               <form action="" onSubmit={handleSubmit}>
           <div className="title">
               <input type="text" required placeholder="title of the movie"  value={title} onChange={(e) => setTitle(e.target.value)} />
           </div>
           
           <div className="Director">
           <input type="text" required placeholder="Director of the movie" value={Director} onChange={(e) => setDirector(e.target.value)} />
           </div>
          
           <div className="Genre">
           <input type="text" required placeholder="Genre of the movies" value={Genre} onChange={(e) => setGenre(e.target.value)} />
           </div>
          
           <div className="Language">
           <input type="text" required placeholder="Language of the movies" value={Language} onChange={(e) => setLanguage(e.target.value)} />
           </div>

           <div className="Released">
           <input type="text" required placeholder="Released of the movies" value={Released} onChange={(e) => setReleased(e.target.value)} />
           </div>
         
           
          <div className="Images">
           <input type="text" required placeholder="image of the movies" value={Images} onChange={(e) => setImages(e.target.value)}  />
            
           </div>
           <button className="btn_btn1">Add Movies</button>

               </form>
           </div>
           
       </div>
    );
}

export default AddMovies;