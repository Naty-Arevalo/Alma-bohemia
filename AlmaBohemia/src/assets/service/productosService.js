import {createApi} from '@reduxjs/toolkit/query/react'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../../firebase/firebaseConfig'


export const productsApi = createApi({
    reducerPath:'productsApi',
    baseQuery: async () => ({ data: null }), 
    endpoints: (builder) =>({
        getProductos: builder.query({
            async queryFn() {
                try{
                    const snapshot = await getDocs(collection(db, 'productos'))
                    const productos = snapshot.docs.map((doc)=>({
                        id:doc.id,
                        ...doc.data()
                    }))
                    return {data:productos}
                }catch(error){
                    return {error}
                }
            }
        }),
        getProductosByCategory: builder.query({
            async queryFn(categoria) {
                try{
                    const q= query(
                        collection(db, 'productos'),
                        where('categoria', '==', categoria)
                    )
                    const snapshot = await getDocs(q)
                    const productos = snapshot.docs.map((doc)=>({
                        id:doc.id,
                        ...doc.data()
                    }))
                    return {data:productos}
                }catch(error){
                    return {error}
                }
            }
        })
    }) 
})

export const {useGetProductosQuery, useGetProductosByCategoryQuery} = productsApi