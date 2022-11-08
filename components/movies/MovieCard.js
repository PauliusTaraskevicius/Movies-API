import Link from "next/link";
import Image from "next/image";

import Meta from "../Meta";

function MovieCard(props) {
  const {
    id,
    title,
    overview,
    popularity,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  } = props.movie;

  return (
    <div>
      <Meta title="Most popular movies" description="Most popular movies"/>
      <Link href={`/movie/${id}`}>
        <div>
          <h1>{title}</h1>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            width={300}
            height={300}
            alt={overview}
          />
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
