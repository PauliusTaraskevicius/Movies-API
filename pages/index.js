import axios from "axios";
import { server } from "../config";
import PopularMovie from "../components/movies/popularMovie";



// https://www.themoviedb.org/settings/api

export default function Home({ movies }) {
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <PopularMovie movies={movies.results} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.MOVIE_DB_KEY}&language=en-US&page=1`
  );

  const movies = res.data;

  return {
    props: {
      movies,
    },
  };
}
