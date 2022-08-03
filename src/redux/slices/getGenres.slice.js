import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1: 0,
    genres: [],
    isLoading: false,
    serverError:null
};

const getGenres = createAsyncThunk(
    'count1Slice/getUsers',
    async (_, {rejectWithValue}) => {
        try {
            // const users = await fetch('https://jsonplaceholder.typicode.com/users')
            const genres = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=200eeac4215449ec08f2c5beb7514d01&language=en-US')
                .then(response => {
                    if (!response.ok) {
                        throw Error('Bad Request!!!')
                    }
                    return response.json()
                });
            return genres
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
);

const count1Slice = createSlice({
    name: 'count1Slice',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.isLoading = false
                state.genres = action.payload
            })
            .addCase(getGenres.pending, state => {
                state.isLoading = true
            })
            .addCase(getGenres.rejected, (state, action) => {
                state.serverError = action.payload
            })
    }
});

const {reducer: genresReducer, actions: {}} = count1Slice;

const genresActions = {
    getGenres
}

export {
    genresReducer,
    genresActions
}