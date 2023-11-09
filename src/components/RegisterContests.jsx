import React from 'react'
import { SelectField } from './SelectField'
import { MONTHS } from '../constaints'

export const RegisterContests = ({ onAddContests }) => {
  const [category, setCategory] = React.useState('Básico')
  const [year, setYear] = React.useState(`${Date(Date.now()).slice(11, 15)}`)
  const [period, setPeriod] = React.useState(`${year}-1`)
  const [validity, setValidity] = React.useState(
    `${Date(Date.now()).slice(11, 15)}-${
      MONTHS[Date(Date.now()).slice(4, 7)]
    }-${Date(Date.now()).slice(8, 10)}`,
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'category':
        setCategory(value)
        break
      case 'year':
        if (parseInt(value) < 2023 && parseInt(value) > 2030) return
        setYear(value)
        break
      case 'period':
        setPeriod(value)
        break
      case 'validity':
        setValidity(value)
        break
      default:
        break
    }
  }

  const handleSubmit = () => {
    onAddContests({ category, year, period, validity })
    console.log('siu')
  }

  return (
    <form className='rc-form' onSubmit={handleSubmit}>
      <strong>Detalles de la Competencia</strong>
      <SelectField
        label='Categoría'
        options={['Básico', 'Intermedio', 'Avanzado', 'Élite']}
        name='category'
        value={category}
        onChange={handleChange}
        required
      ></SelectField>
      <label>Año</label>
      <input
        type='number'
        min='2023'
        max='2030'
        className='rc-inputNumber'
        name='year'
        value={year}
        onChange={handleChange}
        required
      ></input>
      <SelectField
        label='Periodo'
        options={[`${year}-1`, `${year}-3`]}
        name='period'
        value={period}
        onChange={handleChange}
        required
      ></SelectField>
      <label>Vigente hasta:</label>
      <input
        type='date'
        className='rc-dateInput'
        name='validity'
        value={validity}
        onChange={handleChange}
        required
      ></input>
      <button type='button' onClick={handleSubmit}>
        Crear Competencia
      </button>
    </form>
  )
}
