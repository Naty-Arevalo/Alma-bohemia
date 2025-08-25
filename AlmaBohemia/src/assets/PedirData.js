import productos from './Data/productos.json'

export const pedirData = ()=>{
    console.log("hola")
    return new Promise((resolve, reject) => {
        resolve(productos.productos)

    })
   
}
