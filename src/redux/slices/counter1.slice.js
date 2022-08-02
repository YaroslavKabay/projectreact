import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    isLoading: false,
    serverError:null
};

const getMovies = createAsyncThunk(
    'count1Slice/getMovies',
    async (_, {rejectWithValue}) => {
        try {
            const movies = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=200eeac4215449ec08f2c5beb7514d01&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
                .then(response => {
                    if (!response.ok) {
                        throw Error('Bad Request!!!')
                    }
                    return response.json()
                });
             return movies.results;
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
);

// const getGenres = createAsyncThunk(
//     'count1Slice/getGenres',
//     async (_, {rejectWithValue}) => {
//         try {
//             const movies = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=200eeac4215449ec08f2c5beb7514d01&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
//                 .then(response => {
//                     if (!response.ok) {
//                         throw Error('Bad Request!!!')
//                     }
//                     return response.json()
//                 });
//             return genre.results;
//         } catch (e) {
//             return rejectWithValue(e.message)
//         }
//
//     }
// );

const movieSlice = createSlice({
    name: 'MovieSlice',
    initialState,
    extraReducers: {
        [getMovies.fulfilled]: (state, action) => {
            state.isLoading = false
            state.movies = action.payload
        },
        [getMovies.pending]: (state) => {
            state.isLoading = true
        },
        [getMovies.rejected]: (state, action) => {
            state.serverError = action.payload
        }
    }
});

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getMovies
}

export {
    movieReducer,
    movieActions
}