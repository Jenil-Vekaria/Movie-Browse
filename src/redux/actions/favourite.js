import * as api from '../../api';

export const getFavourite = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFavourite();
        dispatch({ type: "FETCH_FAVOURITE", data });
    } catch (error) {
        console.error(error);
    }
};
