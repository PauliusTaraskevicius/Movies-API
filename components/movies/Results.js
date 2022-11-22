import React from "react";

import MovieCard from "./MovieCard";

function Results({ results }) {
  return (
    <div>
      <main>
        <div className="container mx-auto px-4">
          <div className="text-sm grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-8 pb-8 pt-4">
            {results.map((movie) => (
              <div key={movie.id} className="game mt-4">
                <MovieCard movie={movie} key={movie.id} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Results;
