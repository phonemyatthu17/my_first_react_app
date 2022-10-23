import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=ce5efd2c";

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
    </div>
  );
};

export default App;
