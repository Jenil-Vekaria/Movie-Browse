import * as api from '../../api';

export const getPopular = () => async (distpatch) => {
    try {
        const { data: { results, total_results } } = await api.fetchPopular();

        distpatch({ type: "FETCH_MOVIES", payload: { results, total_results } });
    } catch (error) {
        console.error(error);
    }
};

export const getTopRated = () => async (distpatch) => {
    try {
        const { data: { results, total_results } } = await api.fetchTopRated();

        distpatch({ type: "FETCH_MOVIES", payload: { results, total_results } });
    } catch (error) {
        console.error(error);
    }
};

export const getUpcoming = () => async (distpatch) => {
    try {
        const { data: { results, total_results } } = await api.fetchUpcoming();

        distpatch({ type: "FETCH_MOVIES", payload: { results, total_results } });
    } catch (error) {
        console.error(error);
    }
};

export const getLatest = () => async (distpatch) => {
    try {
        const { data: { results, total_results } } = await api.fetchLatest();

        distpatch({ type: "FETCH_MOVIES", payload: { results, total_results } });
    } catch (error) {
        console.error(error);
    }
};

export const getByGenre = (id) => async (distpatch) => {
    try {
        const { data: { results, total_results } } = await api.fetchByGenre(id);
        console.log(results);
        distpatch({ type: "FETCH_MOVIES", payload: { results, total_results } });
    } catch (error) {
        console.error(error);
    }
};