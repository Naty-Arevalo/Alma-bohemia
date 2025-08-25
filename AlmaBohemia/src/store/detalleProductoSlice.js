import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    producto: null
}

const detalleProductoSlice = createSlice({
    name: 'productoDetalle',
    initialState,
    reducers:{
        setProductoSeleccionado: (state, action)=>{
            state.producto = action.payload
        },
        limpiarProductoSeleccionado: (state) => {
            state.producto = null

        }
    }
})


export const {setProductoSeleccionado, limpiarProductoSeleccionado} = detalleProductoSlice.actions
export default detalleProductoSlice.reducer