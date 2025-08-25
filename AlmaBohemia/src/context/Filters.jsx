import { createContext, useState } from "react";

//crear el contexto
export const FiltersContext = createContext()

//proveer el contexto
export function FiltersProvider ({ children}) {
    const [filters, setFilters] = useState({
        categoria:'todos',
        minPrice: 0
    })
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}