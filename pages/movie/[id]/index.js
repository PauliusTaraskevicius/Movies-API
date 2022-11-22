import Image from "next/image";

import { useRouter } from "next/router";

import { server } from "../../../config";

import Meta from "../../../components/Meta";

function MovieDetails({ post }) {
  const {
    title,
    backdrop_path,
    overview,
    release_date,
    genres,
    tagline,
    vote_average,
    production_companies,
  } = post;
  const router = useRouter();

  return (
    <section className=" dark:bg-gray-900">
      <Meta title={title} description={overview} />
      <div className="box container px-6 py-10 mx-auto">
        <h1 class="italic text-xl font-semibold text-gray-400 capitalize lg:text-4xl">
          {!tagline ? "" : tagline}
        </h1>
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          {!backdrop_path ? (
            <Image
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src="/images/no_image.png"
              width={600}
              height={600}
              alt={title}
            />
          ) : (
            <Image
              src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
              width={600}
              height={600}
              alt={title}
            />
          )}
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="text-sm uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Genre: {genres.map((genre) => genre.name).join(", ")}
            </p>

            <h1 className="block mt-4 text-2xl font-semibold text-white dark:text-white md:text-3xl">
              {title}
            </h1>

            <p className="mt-3 text-sm text-white dark:text-gray-300 md:text-sm">
              {overview}
            </p>

            <div className="flex items-center mt-6">
              <div className="mx-0">
                
                <h2 class="text-sm text-white">
                <span className="font-semibold">Release date:</span> {release_date}
                </h2>

                <h2 class="text-sm text-white">
                <span className="font-semibold">Production:</span>{" "}
                  {production_companies.map((prod) => prod.name).join(", ")}
                </h2>

                <p class="text-sm text-white mb-2">
                <span className="font-semibold">Rating:</span>  ⭐{vote_average.toFixed(2)}
                </p>
                <button
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-2 rounded-full"
                  onClick={() => router.back()}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${server}/${context.params?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  let post;
  try {
    post = await res.json();
  } catch (e) {
    console.log("Error", e);
  }

  if (!post) {
    return {
      notFound: true,
    };
  }
  return { props: { post } };
}

export default MovieDetails;
