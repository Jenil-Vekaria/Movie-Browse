const movieReducer = (movie = [], action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            return [action.payload.results, action.payload.total_results, action.payload.total_pages];
        case "FETCH_MOVIE":
            return [action.payload.movieInfo, action.payload.movieCasts, action.payload.movieBackdrops];
        default:
            return movie;
    }
};

export default movieReducer;