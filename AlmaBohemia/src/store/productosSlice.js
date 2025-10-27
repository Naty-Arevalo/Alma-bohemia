import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {productos} from '../assets/Data/productos.json'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase/firebaseConfig'

export const fetchProductos = createAsyncThunk(
    'productos/fetchProductos',
    async() =>{
        const querySnapshot = await getDocs(collection(db, "productos"))
        const data = querySnapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        return data
       
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