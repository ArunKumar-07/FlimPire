import { useState,useEffect} from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';

const API_URl="https://omdbapi.com/?apikey=bcd899ee";

const App =()=>{
    const [movies,setMovies] = useState([]);
    const [serachTerm,setSearchTerm] = useState('');

    const searchMovies=async(title)=>{
        const response=await fetch(`${API_URl}&s=${title}`); 
        const data=await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
              searchMovies('bat');
            },[]);
       
            
    return (
        <div className="app"> 
          <h1 >FlimPire</h1>
            <div className="search"> 
                <input placeholder="Search for movies"
                   value={serachTerm}
                  onChange={(e)=>setSearchTerm(e.target.value)} 
                  />
                  <img src={SearchIcon}
                  alt="Search"
                  onClick={ ()=>searchMovies(serachTerm)}
                  />
            </div>
            {
               movies?.length > 0 
               ? (
                <div className="container">
             {movies.map((movie)=>(
                 <MovieCard   movie={movie} />
             ))}
            </div>
               ) : (
                <div className="empty">
                    <h2> No movies found</h2>
                  </div>  
               )
            } 
        </div>
    );         
}
export default App;