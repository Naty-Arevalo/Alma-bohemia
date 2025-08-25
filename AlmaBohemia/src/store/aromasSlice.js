import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {aromas} from '../assets/Data/aromas.json'


export const fetchAromas = createAsyncThunk(
    'aromas/fetchAromas',
    async() =>{
        return aromas
    }
)


export const aromasSlice = createSlice({
     name: 'aromas',
        initialState: {
            items: [],
            loading: false,
            error : null
        },
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchAromas.pending, (state) =>{
            state.loading = true
        })
        .addCase ( fetchAromas.fulfilled, (state, action) =>{
            state.loading = false,
            state.items = action.payload
        })
        .addCase (fetchAromas.rejected, (state) =>{
            state.loading = false,
            state.error = 'Error al cargar los aromas disponibles'
        })
    }
})

export default aromasSlice.reducer