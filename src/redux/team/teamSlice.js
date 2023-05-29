import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://www.balldontlie.io/api/v1/teams'

const initialState = {
    teams: []
}

export const getTeams = createAsyncThunk('team/getTeams', async() => {
    const response = axios.get(url)
    const result = (await response).data
    return result.data
})

const teamSlice = createSlice({
    name:'teams',
    initialState,
    extraReducers: (builders) => {
        builders.addCase(getTeams.fulfilled, (state, action) => {
            state.teams = action.payload
        })
    }
})

export default teamSlice.reducer