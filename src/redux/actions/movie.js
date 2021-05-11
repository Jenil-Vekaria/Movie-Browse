import * as api from '../../api';

export const getPopular = (page) => async (dispatch) => {
    try {
        const { data: { results, total_results, total_pages } } = await api.fetchPopular(page);

        dispatch({ type: "FETCH_MOVIES", payload: { results, total_results, total_pages } });
    } catch (error) {
        console.error(error);
    }
};

export const getTopRated = (page) => async (dispatch) => {
    try {
        const { data: { results, total_results, total_pages } } = await api.fetchTopRated(page);

        dispatch({ type: "FETCH_MOVIES", payload: { results, total_results, total_pages } });
    } catch (error) {
        console.error(error);
    }
};

export const getUpcoming = (page) => async (dispatch) => {
    try {
        const { data: { results, total_results, total_pages } } = await api.fetchUpcoming(page);

        dispatch({ type: "FETCH_MOVIES", payload: { results, total_results, total_pages } });
    } catch (error) {
        console.error(error);
    }
};

export const getLatest = (page) => async (dispatch) => {
    try {
        const { data: { results, total_results, total_pages } } = await api.fetchLatest(page);

        dispatch({ type: "FETCH_MOVIES", payload: { results, total_results, total_pages } });
    } catch (error) {
        console.error(error);
    }
};

export const getByGenre = (id, page) => async (dispatch) => {
    try {
        const { data: { results, total_results, total_pages } } = await api.fetchByGenre(id, page);

        dispatch({ type: "FETCH_MOVIES", payload: { results, total_results, total_pages } });
    } catch (error) {
        console.error(error);
    }
};

export const getMovie = (name, page) => async (dispatch) => {
    try {
        const preparedName = name.toLowerCase().replaceAll(' ', '%20');

        const { data: { results, total_results, total_pages } } = await api.fetchMovie(preparedName, page);

        dispatch({ type: "FETCH_MOVIES", payload: { results, total_results, total_pages } });
    } catch (error) {
        console.error(error);
    }
};

export const getMovieInfo = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchMovieInfo(id);
        const castData = await api.fetchMovieCredit(id);
        const backdropsData = await api.fetchMovieImages(id);
        const trailer = await api.fetchMovieTrailer(id);
        const similarMovies = await api.fetchSimilarMovies(id);

        dispatch({
            type: "FETCH_MOVIE",
            payload: {
                movieInfo: data,
                movieCasts: castData.data.cast,
                movieBackdrops: backdropsData.data.backdrops,
                movieTrailer: trailer.data.results,
                similarMovies: similarMovies.data.results
            }
        });
    } catch (error) {
        console.error(error);
    }
};