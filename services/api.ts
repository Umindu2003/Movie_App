export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  V4_TOKEN: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({
  query,
}: {
  query: string;
}): Promise<Movie[]> => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&include_adult=false&language=en-US&page=1`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return Array.isArray(data.results) ? data.results : [];
};

export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
  const response = await fetch(
    `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?language=en-US`,
    {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch movie details: ${response.status} ${response.statusText}`);
  }

  return response.json();
};