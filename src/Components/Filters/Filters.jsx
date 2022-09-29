import React from 'react'
import { ContentFilters } from './FiltersStyles'

const filters = [
  {
    name: 'Nombre',
    value: 'nombre'
  },
  {
    name: 'Razón Social',
    value: 'razon_social'
  },
  {
    name: 'NIT',
    value: 'nit'
  },
  {  
    name: 'Teléfono',
    value: 'telefono'
  },
  {
    name: 'Código',
    value: 'codigo'
  },
]

const Filters = ({ filterBy, setFilterBy }) => {


  return (
    <ContentFilters>
      <span>Filtrar por:</span>
      <div>
        {
          filters.map(option => (
            <div className="filter-by" key={option.id}>
              <input 
                type="radio" 
                name="filter" 
                id={option.id} 
                value={option.value} 
                onChange={ e => setFilterBy(e.target.value) } 
                checked={ filterBy === option.value }
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))
        }
      </div>
    </ContentFilters>
  )
}

export default Filters