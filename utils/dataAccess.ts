const MOVIE_URL = "https://api.themoviedb.org/3/movie";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie"
const ACTOR_URL = "https://api.themoviedb.org/3/person";
const KEY = "?api_key=6578bf7124061630b4692390d9d2de64";


// Get
export const get = (url: string) => {
	return fetch(url)
		.then(r => r.json())
		.catch(err => console.error(err));
}

// POPULAR Movies
export const getPopularMovies = async () => {
	const data: string[] = await get(`${MOVIE_URL}/popular${KEY}&include_adult=false`);
	return [...data.results];
}

export const getMorePopularMovies = async () => {
	const data: string[] = await get(`${MOVIE_URL}/popular${KEY}&page=2&include_adult=false`);
	return [...data.results];
}

// TOP RATED Movies
export const getTopRatedMovies = async () => {
	const data: string[] = await get(`${MOVIE_URL}/top_rated${KEY}`);
	return [...data.results];
}

export const getMoreTopRatedMovies = async () => {
	const data: string[] = await get(`${MOVIE_URL}/top_rated${KEY}&page=2&include_adult=false`);
	return [...data.results];
}

// UPCOMING Movies
export const getUpcomingMovies = async () => {
	const data: string[] = await get(`${MOVIE_URL}/upcoming${KEY}&include_adult=false`);
	return [...data.results];
}

export const getMoreUpcomingMovies = async () => {
	const data: string[] = await get(`${MOVIE_URL}/upcoming${KEY}&page=2&include_adult=false`);
	return [...data.results];
}

// Get Movie Data
export const getMovieDetails = async (id) => {
	const data: string[] = await get(`${MOVIE_URL}/${id}${KEY}`);
	// console.log(data);
	return [data];
}

export const getSimilarMovies = async (id) => {
	const data: string[] = await get(`${MOVIE_URL}/${id}/similar${KEY}&include_adult=false`);
	// console.log(data);
	return [...data.results];
}

export const getActors = async(id) => {
	const data: string[] = await get(`${MOVIE_URL}/${id}/credits${KEY}`);
	// console.log(data);
	return [data];
}

// Search movies
export const getSearchMovies = async(id) => {
	const data: string[] = await get(`${SEARCH_URL}${KEY}&query=${id}&include_adult=false`);
	// console.log(data);
	return [...data.results];
}

// get trailer
export const getTrailer = async(id) => {
	const data: string[] = await get(`${MOVIE_URL}/${id}/videos${KEY}`);
	//https://api.themoviedb.org/3/movie/399566/videos?api_key=6578bf7124061630b4692390d9d2de64&language=en-US
	// console.log(data);
	return [...data.results];
}

// get ActorDetails
export const getActorDetails = async(id) => {
	const data: string[] = await get(`${ACTOR_URL}/${id}${KEY}`);
	// console.log(data);
	return [data];
}

// get ActorDetails
export const getActorMovies = async(id) => {
	const data: string[] = await get(`${ACTOR_URL}/${id}/movie_credits${KEY}&include_adult=false`);
	// console.log(data);
	return [...data.cast];
}