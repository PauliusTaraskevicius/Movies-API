export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default {
  fetchPopular: {
    title: "Popular",
    url: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  },

  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchUpcoming: {
    title: "Upcoming",
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
};
