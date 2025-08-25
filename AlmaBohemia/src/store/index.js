import {configureStore} from '@reduxjs/toolkit'
import productodReducer from './productosSlice'
import filtroReducer from './filtroSlice'
import carritoReducer from './carritoSlice'
import  aromasReducer  from './aromasSlice'
import detalleProductoReducer from './detalleProductoSlice'

export const store = configureStore({
    reducer:{
        productos: productodReducer,
        filtro: filtroReducer,
        carrito: carritoReducer,
        aromas: aromasReducer,
        detalleProducto: detalleProductoReducer,
    }
})