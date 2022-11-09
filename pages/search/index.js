import { useState } from "react";
import axios from "axios";
import { server } from "../../config";

import MovieCard from "../../components/movies/MovieCard";

function SearchMovie() {
  const [searchResults, setSearchResults] = useState([]);
  const [formInput, setFormInput] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  function handleInput(event) {
    let { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
    setSearchTerm(event.target.value);
  }

  async function search(event) {
    event.preventDefault();
    let movies = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${formInput.searchTerm}&page-1&include_adult=false`
    );
    movies = await movies.json();
    setSearchResults(movies.results);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={handleInput}
        />
        <button>Search</button>
      </form>

      <div>
        {searchResults.map((movie) => (
          <MovieCard  movie={movie} key={movie.id}/>
        ))}
      </div>
    </div>
  );
}

export default SearchMovie;
