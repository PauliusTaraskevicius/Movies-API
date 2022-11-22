import MovieSearch from "../components/movies/movies_search/MovieSearch";

import requests from "../utils/requests";
import Results from "../components/movies/Results";

// https://www.themoviedb.org/settings/api

export default function Home({ results }) {
  return (
    <div>
      <MovieSearch />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const category = context.query.category;
  try {
    const request = await fetch(
      `https://api.themoviedb.org/3${
        requests[category]?.url || requests.fetchTrending.url
      }`
    ).then((res) => res.json());
    return {
      props: {
        results: request.results,
      },
    };
  } catch (err) {
    console.error(err);
  }
}
