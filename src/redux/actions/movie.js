import * as api from '../../api';

export const getPopular = (page) => async (distpatch) => {
    try {
        const { data: { results, total_results, total_pages } } = await api.fetchPopular(page);

        distpatch({ type: "FETCH_MOVIES", payload: { results, total_results, total_pages } });
    } catch (error) {
        console.error(error);
    }
};

export const getTopRated = (page) => async (distpatch) => {
    try {
        const { data: { results, total_results, total_pages } } = await api.fetchTopRated(page);

        distpatch({ type: "FETCH_MOVIES", payload: { results, total_results, total_pages } });
    } catch (error) {
        console.error(error);
    }
};

export const getUpcoming = (page) => async (distpatch) => {
    try {
        const { data: { results, total_results, total_pages } } = await api.fetchUpcoming(page);

        distpatch({ type: "FETCH_MOVIES", payload: { results, total_results, total_pages } });
    } catch (error) {
        console.error(error);
    }
};

export const getLatest = (page) => async (distpatch) => {
    try {
        const { data: { results, total_results, total_pages } } = await api.fetchLatest(page);

        distpatch({ type: "FETCH_MOVIES", payload: { results, total_results, total_pages } });
    } catch (error) {
        console.error(error);
    }
};

export const getByGenre = (id, page) => async (distpatch) => {
    try {
        const { data: { results, total_results, total_pages } } = await api.fetchByGenre(id, page);

        distpatch({ type: "FETCH_MOVIES", payload: { results, total_results, total_pages } });
    } catch (error) {
        console.error(error);
    }
};

export const getMovie = (name, page) => async (distpatch) => {
    try {
        const preparedName = name.toLowerCase().replaceAll(' ', '%20');

        const { data: { results, total_results, total_pages } } = await api.fetchMovie(preparedName, page);

        distpatch({ type: "FETCH_MOVIES", payload: { results, total_results, total_pages } });
    } catch (error) {
        console.error(error);
    }
};

export const getMovieInfo = (id) => async (distpatch) => {
    try {
        const { data } = await api.fetchMovieInfo(id);
        // console.log(data);
        distpatch({ type: "FETCH_MOVIE", payload: { data } });
    } catch (error) {
        console.error(error);
    }
};

export const getMovieCredit = (id) => async (distpatch) => {
    try {
        const { data: { cast } } = await api.fetchMovieCredit(id);
        // console.log(data);
        distpatch({ type: "FETCH_MOVIE_CREDIT", payload: { cast } });
    } catch (error) {
        console.error(error);
    }
};