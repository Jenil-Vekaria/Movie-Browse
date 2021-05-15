const favouriteReducer = (favourite = {}, action) => {
    switch (action.type) {
        case "FETCH_FAVOURITE":
            return { ...action.data };
        case "CLEAR_FAVOURITE":
            return {};
        default:
            return favourite;
    }
};

export default favouriteReducer;