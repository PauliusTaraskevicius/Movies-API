function Banner() {
  return (
    <div className="flex flex-col text-center  mt-28 my-12">
      <h1 className="block mb-4 text-white text-4xl lg:text-5xl font-bold uppercase">
        <span className="text-blue-600">Movies</span> search
      </h1>
      <span className="text-white text-xl ">
        Search for any movie from TMDB API database
      </span>
    </div>
  );
}

export default Banner;
