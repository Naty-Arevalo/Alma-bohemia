import React, { useState } from 'react'
import dataProductos from "../../Data/productos.json"
import dataAromas from "../../Data/aromas.json"


const AdminPanel = () => {
    const [productos, setProductos] = useState(dataProductos.productos || [])
    const [aromas, setAromas] = useState(dataAromas)
    const[showForm, setShowForm] = useState(false)
    const [productoNuevo, setProductoNuevo] = useState({
        nombre:"",
        precio:"",
        categoria: "velas",
        fotos: ["", "", ""]
    })
    const [preciosEditables, setPreciosEditables] = useState(
        productos.reduce((acc,p) => {
            acc[p.id] = p.precio 
            return acc
        }, {})
    )
    
    const handleAdd = (e)=>{
        e.preventDefault()
        const nuevo = {
            id: Date.now(),
            ...productoNuevo,
            precio:Number(productoNuevo.precio)
        }
        setProductos ([...productos,nuevo])
        setPreciosEditables ({
            ...preciosEditables,
            [nuevo.id]: Number(productoNuevo.precio)
        })
        setProductoNuevo ({ nombre:"", precio:"", categoria:"velas", fotos:["","",""]})
        setShowForm(false)
    } 

    const eliminarProducto = (id)=>{
        setProductos(productos.filter (p =>p.id != id))

        const preciosNuevos = {...preciosEditables}
        delete preciosNuevos[id]
        setPreciosEditables(preciosNuevos)
    }

    const confirmarCambios= ()=>{
        const actualizados = productos.map(p => ({
            ...p,
            precio: Number(preciosEditables[p.id]) || p.precio
        }))
        setProductos(actualizados)
        alert ("precios Actualizados ✔️")
    }
  return (
    <div>
        <h1 className='text-2xl text-pink-400'>Panel de Administracion</h1>
        <button
            onClick={()=> setShowForm(true)}
            className='bg-black text-white font-semibold px-4 py-2 rounded m-2'
            >
                Agregar Producto
        </button>    
        {showForm && (
            <form onSubmit={handleAdd}>
                <input  
                    type= "text"
                    placeholder= "Nombre"
                    value= {productoNuevo.nombre}
                    onChange={(e)=> setProductoNuevo({ ...productoNuevo, nombre: e.target.value })}
                    required
                    className=''
                />
                <input 
                    type="text"
                    placeholder= "precio"
                    value={productoNuevo.precio}
                    onChange={(e)=> setProductoNuevo({ ...productoNuevo, precio:e.target.value })} 
                    required
                    className=''
                />

                {productoNuevo.fotos.map((foto, i)=>(
                <input 
                    type="text"
                    key={i}
                    placeholder={`URL Foto ${i +1}`}
                    value={foto}
                    onChange={(e)=>{
                        const newFotos = [...productoNuevo.fotos]
                        newFotos[i]= e.target.value
                        setProductoNuevo({ ...productoNuevo, fotos:newFotos })
                    }} 
                />
                ))}
                <select 
                    value={productoNuevo.categoria}
                    onChange={(e)=> setProductoNuevo({ ...productoNuevo, categoria:e.target.value})}
                    className=''
                >
                    <option value="velas">Velas</option>
                    <option value="difusores">Difusores</option>
                    <option value="home sparys">Home Sprays</option>
                    <option value="destacados">Destacados</option>
                </select>
                <button 
                    type='submit'
                    className=''
                >
                    Guardar
                </button>
            </form>
        )}

        <ul className='space-y-4'>
            {productos.map((p)=>(
                <li key={p.id} className='flex justify-around items-center border-b pb-2'>
                    <div className='flex gap-4 items-center'>
                        <div className='flex gap-1'>
                            {Array.isArray (p.img) && 
                            p.img.map((f, i)=> f && (
                            <img key={i} src={f} alt={p.nombre} className='w-14 h-14 object-cover rounded'/>))}
                        </div>
                        <div className=''>
                            <h2 className='font-semibold'>{p.nombre}</h2>
                            <p className='text-sm text-gray-600'>Categoria: {p.categoria}</p>
                            <div >
                                <input 
                                    type="number"
                                    value={preciosEditables[p.id]}
                                    onChange={(e)=>
                                        setPreciosEditables({
                                            ...preciosEditables,
                                            [p.id]: e.target.value
                                        })
                                    } 
                                className='border px-2 py-1 w-24'
                                />
                                <span>ARS</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                        onClick={()=> eliminarProducto(p.id)}
                        className='bg-red-300 px-2 py-1 rounded'
                    >
                        Eliminar
                    </button>
                    </div>
                </li>
            ))}
        </ul>
        {productos.length > 0 && (
            <button
            onClick={confirmarCambios}
            className='mt-6 bg-blue-400 text-white px-4 py-2 rounded'
            >
                Confirmar Cambios
            </button>
        )}
    </div>   
  )
}

export default AdminPanel