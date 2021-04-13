const movieReducer = (movie = [], action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            return [action.payload];
        default:
            return movie;
    }
};

export default movieReducer;