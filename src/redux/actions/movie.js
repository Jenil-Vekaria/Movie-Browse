import * as api from '../../api';

export const getPopular = () => async (distpatch) => {
    try {
        const { data: { results } } = await api.fetchPopular();

        distpatch({ type: "FETCH_MOVIES", payload: results });
    } catch (error) {
        console.error(error);
    }
};

export const getTopRated = () => async (distpatch) => {
    try {
        const { data: { results } } = await api.fetchTopRated();

        distpatch({ type: "FETCH_MOVIES", payload: results });
    } catch (error) {
        console.error(error);
    }
};

export const getUpcoming = () => async (distpatch) => {
    try {
        const { data: { results } } = await api.fetchUpcoming();

        distpatch({ type: "FETCH_MOVIES", payload: results });
    } catch (error) {
        console.error(error);
    }
};

export const getLatest = () => async (distpatch) => {
    try {
        const { data: { results } } = await api.fetchLatest();

        distpatch({ type: "FETCH_MOVIES", payload: results });
    } catch (error) {
        console.error(error);
    }
};