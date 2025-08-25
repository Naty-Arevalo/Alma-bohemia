import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {productos} from '../assets/Data/productos.json'


export const fetchProductos = createAsyncThunk(
    'productos/fetchProductos',
    async() =>{
        return productos
       
    }
)
export const productosSlice = createSlice({
    name:'productos',
    initialState: {
        items:[],
        loading: false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProductos.pending, (state)=>{
            state.loading = true
        })
        .addCase(fetchProductos. fulfilled, (state, action) =>{
            state.loading=false
            state.items = action.payload
        })
        .addCase(fetchProductos.rejected, (state)=>{
            state.loading = false
            state.error = 'Error al Cargar los productos'
        })
    }
    
})

// export const {setProductos} = productosSlice.actions
export default productosSlice.reducer