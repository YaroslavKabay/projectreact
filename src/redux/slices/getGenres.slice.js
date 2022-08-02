import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1: 0,
    users: [],
    isLoading: false,
    serverError:null
};

const getUsers = createAsyncThunk(
    'count1Slice/getUsers',
    async (_, {rejectWithValue}) => {
        try {
            // const users = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=200eeac4215449ec08f2c5beb7514d01&language=en-US')
                .then(response => {
                    if (!response.ok) {
                        throw Error('Bad Request!!!')
                    }
                    return response.json()
                });
            return users
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
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.users = action.payload
            })
            .addCase(getUsers.pending, state => {
                state.isLoading = true
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.serverError = action.payload
            })
    }
});

const {reducer: count1Reducer, actions: {}} = count1Slice;

const count1Actions = {
    getUsers
}

export {
    count1Reducer,
    count1Actions
}