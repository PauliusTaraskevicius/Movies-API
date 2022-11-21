import { useState } from "react";

import Image from "next/image";

import SearchResults from "./SearchResults";

function MovieSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [formInput, setFormInput] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  function handleInput(event) {
    let { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
    setSearchTerm(event.target.value);
  }

  async function search(event) {
    event.preventDefault();
    setLoading(true);
    let movies = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${formInput.searchTerm}&page-1&include_adult=false`
    );
    movies = await movies.json();
    setSearchResults(movies.results);
    setLoading(false);
  }

  return (
    <div>
      <div className="flex flex-col text-center  mt-28 my-12">
        <h1 className="block mb-4 text-white text-4xl lg:text-5xl font-bold uppercase"><span className="text-blue-600">Movies</span> search</h1>
        <span className="text-white text-xl ">
          Search for any movie from TMDB API database
        </span>
      </div>
      <form onSubmit={search}>
        <div className="text-black flex items-center justify-center">
          <div className="border rounded overflow-hidden flex">
            <input
              className="px-4 py-2"
              type="search"
              name="searchTerm"
              value={searchTerm}
              onChange={handleInput}
              id="search"
              v-model="searchTerm"
              placeholder="Enter title..."
            />
            {loading ? (
              <button className="flex items-center justify-center px-4 border-l bg-white">
                <Image
                  src="/images/loading.gif"
                  alt="instagram"
                  width={42}
                  height={42}
                />
              </button>
            ) : (
              <button className="flex items-center justify-center px-4 border-l bg-white">
                <svg
                  className="h-4 w-4 text-grey-dark"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <SearchResults moviesSearched={searchResults} />
      </form>
    </div>
  );
}

export default MovieSearch;
