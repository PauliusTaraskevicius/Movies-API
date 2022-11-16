import MovieCard from "./MovieCard";

function SearchedMovies({ moviesSearched }) {


  return (
    <div>
      <h1>Search Results</h1>
      {moviesSearched.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/>
      ))}
    </div>
  );
}

export default SearchedMovies;
