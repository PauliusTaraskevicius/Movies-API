import MovieCard from "./MovieCard";

function PopularMovie({ movies }) {
  return (
    <div>
      <h1>Popular Movies</h1>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default PopularMovie;
