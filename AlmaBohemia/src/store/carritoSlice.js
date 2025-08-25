import { createSlice, createSelector} from "@reduxjs/toolkit";

// devuelve el array de items
export const selectCartItems = (state) => state.carrito.items || [];

// devuelve el precio total del carrito
export const selectCartTotal = createSelector(
  [selectCartItems],
  (items) =>
    items.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
);
//cantidad de elementos en el carrito
export const selectTotalQuantity = createSelector(
    [selectCartItems],
    (items) =>items.reduce((sum,item) => sum + item.cantidad, 0)
    
)
//cargar el carrito en el localStorage
const storedCart= JSON.parse(localStorage.getItem('carrito'))


const initialState ={
    items : storedCart || []
}



const carritoSlice = createSlice({
    name:'carrito',
    initialState,
    reducers:{
        agregarAlCarrito: (state,action) => {
            console.log('agregando al carrito', action.payload)
            const producto = action.payload
            const existente = state.items.find (
                item => item.id === producto.id && item.aroma === producto.aroma)
            if (existente){
                existente.cantidad += 1
            }else{
                state.items.push ({ 
                    ...producto,
                    cantidad:producto.cantidad || 1
                })
            }
        },
        sumarCantidad: (state, action)=>{
            const producto = state.items.find(i =>i.id === action.payload.id)
            if(producto){
                producto.cantidad += 1
            }
        },
        restarCantidad: (state, action)=>{
            const producto = state.items.find(i =>i.id === action.payload.id)
            if(producto && producto.cantidad >1){

                producto.cantidad -= 1
            }
        },
        eliminarDelCarrito : (state, action) =>{
            const { id, aroma } = action.payload;
            state.items = state.items.filter(item => !(item.id === id && item.aroma === aroma));
        },
        vaciarCarrito (state){
            state.items = [];
        }

    }
})

export const {agregarAlCarrito, eliminarDelCarrito,vaciarCarrito,sumarCantidad, restarCantidad} = carritoSlice.actions
export default carritoSlice.reducer