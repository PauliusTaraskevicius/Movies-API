import Image from "next/image";

import axios from "axios";
import { server } from "../../../config";

import Meta from "../../../components/Meta";

function MovieDetails({ movie }) {
  console.log(movie);
  const { title, backdrop_path, overview, genres, release_date } = movie;

  return (
    <div>
      <Meta
        title={title}
        description={overview}
        keywords={genres.map((genre) => genre.name)}
      />
      <h1>{title}</h1>
      <Image
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        width={600}
        height={600}
      />
      <p>{overview}</p>
      <p>
        Genres: <span>{genres.map((genre) => genre.name).join(", ")}</span>
      </p>
      <p>
        Realease date: <span>{release_date}</span>
      </p>
    </div>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(
    `${server}/${id}?api_key=${process.env.MOVIE_DB_KEY}&language=en-US&page=1`
  );

  const movie = res.data;

  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.MOVIE_DB_KEY}&language=en-US&page=1`
  );

  const movies = res.data.results;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default MovieDetails;
