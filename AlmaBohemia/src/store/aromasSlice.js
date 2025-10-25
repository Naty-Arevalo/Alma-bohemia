import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import {aromas} from '../assets/Data/aromas.json'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase/firebaseConfig'


export const fetchAromas = createAsyncThunk(
    'aromas/fetchAromas',
    async() =>{
        const querySnapshot = await getDocs(collection(db, "aromas"))
        const data = querySnapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        return data
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