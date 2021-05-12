const favouriteReducer = (favourite = {}, action) => {
    switch (action.type) {
        case "FETCH_FAVOURITE":
            return { ...action.data };
        default:
            return favourite;
    }
};

export default favouriteReducer;