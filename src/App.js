import { useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=ce5efd2c";

const movie = {
  Title: "The Godfather",
  Year: "1972",
  imdbID: "tt0068646",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("the godfather");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        ></input>
        <img src={SearchIcon} alt="search" onClick={() => {}}></img>
      </div>

      <div className="container">
        <MovieCard movie={movie} />
      </div>
    </div>
  );
};

export default App;
