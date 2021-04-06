const MOVIE_URL = "https://api.themoviedb.org/3/movie";
const SEARCH_URL = ""
const KEY = "?api_key=6578bf7124061630b4692390d9d2de64";


// Get
export const get = (url: string) => {
	return fetch(url)
		.then(r => r.json())
		.catch(err => console.error(err));
}

// POPULAR Movies
export const getPopularMovies = async () => {
	const data: string[] = await get(`${MOVIE_URL}/popular${KEY}`);
	return [...data.results];
}

export const getMorePopularMovies = async () => {
	const data: string[] = await get(`${MOVIE_URL}/popular${KEY}&page=2`);


	return [...data.results];
}

// TOP RATED Movies
export const getTopRatedMovies = async () => {
	const data: string[] = await get(`${MOVIE_URL}/top_rated${KEY}`);
	return [...data.results];
}

export const getMoreTopRatedMovies = async () => {
	const data: string[] = await get(`${MOVIE_URL}/top_rated${KEY}&page=2`);
	return [...data.results];
}

// UPCOMING Movies
export const getUpcomingMovies = async () => {
	const data: string[] = await get(`${MOVIE_URL}/upcoming${KEY}`);
	return [...data.results];
}

export const getMoreUpcomingMovies = async () => {
	const data: string[] = await get(`${MOVIE_URL}/upcoming${KEY}&page=2`);
	return [...data.results];
}

// Get Movie Data
export const getMovieDetails = async (id) => {
	const data: string[] = await get(`${MOVIE_URL}/${id}${KEY}`);
	// console.log(data);
	return [data];
}
