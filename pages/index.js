import { useState } from "react";

import axios from "axios";
import { server } from "../config";

// import PopularMovie from "../components/movies/popularMovie";
// import SearchedMovies from "../components/movies/SearchedMovies";

import MovieSearch from "../components/movies/movies_search/MovieSearch";

import requests from "../utils/requests";

// https://www.themoviedb.org/settings/api

export default function Home({ movies }) {


  return (
    <div className="">
      <MovieSearch />
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

