import axios from "axios";
import { server } from "../config";

import PopularMovie from "../components/movies/popularMovie";

import SearchMovie from "./search";

import requests from "../utils/requests";

// https://www.themoviedb.org/settings/api

export default function Home({ movies }) {
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <SearchMovie />
      <PopularMovie movies={movies.results} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(`${server}${requests.fetchPopular.url}`);

  const movies = res.data;

  return {
    props: {
      movies,
    },
  };
}
