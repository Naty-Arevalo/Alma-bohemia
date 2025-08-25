import {  useId } from "react"
import { useFilters } from "../Hooks/UseFilters"


const Filters = () => {
    const {filters, setFilters} = useFilters()
    
    const minPriceFilterId = useId()
    const categoryFilteredId = useId()

    const handleChangeMinPrice = (e) =>{
        setFilters(prevState =>({
            ...prevState,
            minPrice:e.target.value
        }))
    }

    const handleChangeCategory = (e) =>{
        setFilters(prevState =>({
            ...prevState,
            categoria:e.target.value
        }))
    }
  return (
    <section>
        <div>
            <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
            <input 
            type="range" //siempre que se use el rango hay que marcar de donde comienza el precio con el onChange
            id={minPriceFilterId}
            min='0'
            max='400'
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
        </div>
        <div>
            <label htmlFor={categoryFilteredId}>Categoria</label>
            <select id={categoryFilteredId} onChange={handleChangeCategory}>
                <option value="todos">Todas</option>
                <option value="velas">Velas</option>
                <option value="difusores">Difusores</option>
                <option value="carameleras">Carameleras</option>
            </select>
        </div>

    </section>
  )
}

export default Filters