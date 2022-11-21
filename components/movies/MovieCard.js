import Link from "next/link";
import Image from "next/image";

import Meta from "../Meta";

function MovieCard(props) {
  const { id, title, original_name, overview, poster_path, vote_average } = props.movie;

  return (
    <div>
      <Meta title="Most popular movies" description="Most popular movies" />

      <div className="relative inline-block hover:scale-105 ease-in duration-300">
        <Link href={`/search/${id}`}>
          {!poster_path ? (
            <Image
              className="block h-full w-full object-cover  cursor-pointer"
              src="/images/no_image.png"
              width={300}
              height={600}
              alt={overview}
            />

          ) : (
            <Image
              className="block h-full w-full object-cover object-center cursor-pointer"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              width={300}
              height={300}
              alt={overview}
            />
          )}
        </Link>
        {vote_average >= 7 ? (
          <div
            className="absolute bottom-0 right-0 w-12 h-12 bg-yellow-300 rounded-full"
            style={{ right: "-10px", bottom: "-10px" }}
          >
            <div className="font-semibold text-xs flex justify-center items-center h-full">
              TOP
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <a
        href="#"
        className="block text-base font-semibold leading-tight text-white hover:text-blue-400 mt-8"
      >
        {!title ? original_name : title}
      </a>
      <div className="text-gray-400 mt-1">{vote_average}</div>
    </div>
  );
}

export default MovieCard;
