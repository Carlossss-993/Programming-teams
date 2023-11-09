import React from 'react'
import { MemberForm } from './MemberForm'

import { InputField } from './InputField'
import { SelectField } from './SelectField'

import { LEVELS, LEVELS_ORDER } from '../constaints'

export const TeamForm = ({ onSubmitTeam }) => {
  const [teamName, setTeamName] = React.useState('')
  const [members, setMembers] = React.useState([{}])
  const [availableLevels, setAvailableLevels] = React.useState([
    'Básico',
    'Intermedio',
    'Avanzado',
    'Élite',
  ])
  const [teamLevel, setTeamLevel] = React.useState(`${availableLevels[0]}`)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitTeam({ teamName, teamLevel, members })
  }

  const handleAddMember = () => {
    if (members.length === 3) {
      alert('La capacidad máxima del grupo es 3')
      return
    }
    setMembers([...members, {}])
  }

  const handleDeleteMember = (index) => {
    if (members.length === 1) {
      alert('La capacidad minima del grupo es 1')
      return
    }
    setMembers(members.filter((member, i) => i !== index))
  }

  const handleUpdateMember = (index, data) => {
    const newMembers = [...members]
    newMembers[index] = data
    setMembers(newMembers)
    updateAvailableLevels(newMembers)
  }

  const updateAvailableLevels = (newMembers) => {
    let aux = 'Programación Básica'
    for (const member of newMembers) {
      if (LEVELS_ORDER.indexOf(member.course) > LEVELS_ORDER.indexOf(aux)) {
        aux = member.course
      }
    }
    setAvailableLevels(LEVELS[aux])
  }

  return (
    <form className='tf-form' onSubmit={handleSubmit}>
      <strong>Datos del Equipo</strong>
      <InputField
        label='Nombre'
        value={teamName}
        required
        onChange={(e) => {
          setTeamName(e.target.value)
        }}
      />
      <SelectField
        label='Categoría'
        value={teamLevel}
        required
        onChange={(e) => {
          setTeamLevel(e.target.value)
        }}
        options={availableLevels}
      />
      {members.map((member, index) => (
        <MemberForm
          key={index}
          index={index}
          member={member}
          onDelete={handleDeleteMember}
          onUpdate={handleUpdateMember}
        />
      ))}
      <button type='button' onClick={handleAddMember}>
        Agregar miembro
      </button>
      <button type='submit'>Enviar formulario</button>
    </form>
  )
}
