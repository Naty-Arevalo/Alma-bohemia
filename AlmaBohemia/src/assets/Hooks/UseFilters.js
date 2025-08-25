import { useContext } from "react"
import { FiltersContext } from "../../context/Filters"

export function useFilters (){

    const {filters, setFilters} = useContext(FiltersContext)
   
      const filterProducts = (productos) =>{            //constante filterProducts (de productos) 
        return productos.filter(producto =>{                 //retorna un filtrado de productos
          return(                                                         
            producto.precio >= filters.minPrice &&            //si producto.precio  es mayor o = a filters.nimprice (que es 0), Y
            (                                                     
              filters.categoria === 'todos' ||                  //filters.categoria es = a "todos" Ó 
              producto.categoria === filters.categoria              //producto.categoria es = a filters.categoria
            )
          )
        })
      }
      return {filters,filterProducts, setFilters}
    }