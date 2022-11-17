import MovieCard from "../MovieCard";

function SearchResults({ moviesSearched }) {
  return (
    <div>
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-blue-400 uppercase tracking-wide font-semibold">
            Search results:
          </h2>
          <div className="text-sm grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-8 pb-8 pt-4">
            {!moviesSearched
              ? ""
              : moviesSearched.map((movie) => (
                  <div className="game mt-4">
                    <MovieCard movie={movie} key={movie.id} />
                  </div>
                ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default SearchResults;
