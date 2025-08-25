import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoria: 'todos',
    aroma : 'todos'
}

export const filtroSlice = createSlice({
    name: 'filtro',
    initialState,
    reducers: {
        setCategoria :(state, action) => {
            state.categoria = action.payload           
        },
        setAroma: (state, action) =>{
            state.aroma = action.payload
        },
        resetFiltros :()=> initialState
    } 
})

export const {setCategoria, setAroma} = filtroSlice.actions
export default filtroSlice.reducer