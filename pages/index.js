import { useState } from "react";

import axios from "axios";
import { server } from "../config";

import PopularMovie from "../components/movies/popularMovie";
import SearchedMovies from "../components/movies/SearchedMovies";

import requests from "../utils/requests";

// https://www.themoviedb.org/settings/api

export default function Home({ movies }) {
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
      <h1>HOMEPAGE</h1>

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
          <SearchedMovies moviesSearched={searchResults} />
        </div>
      </div>
      {/* <SearchMovie /> */}
      {/* <PopularMovie movies={movies.results} /> */}
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await axios(`${server}${requests.fetchPopular.url}`);

//   const movies = res.data;

//   return {
//     props: {
//       movies,
//     },
//   };
// }

