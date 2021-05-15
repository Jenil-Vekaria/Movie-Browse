import * as api from '../../api';

export const getFavourite = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFavourite();
        dispatch({ type: "FETCH_FAVOURITE", data });
    } catch (error) {
        console.error(error);
    }
};

export const favouriteMovie = (id, movieData) => async (dispatch) => {
    try {
        await api.createMovie(movieData);
        await api.favouriteMovie(id);
    } catch (error) {
        console.error(error);
    }
};

