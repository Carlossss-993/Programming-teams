import React from 'react'

import { InputField } from './InputField'
import { SelectField } from './SelectField'

export const MemberForm = ({ index, member, onDelete, onUpdate }) => {
  const [nameMember, setName] = React.useState(member.name || '')
  const [code, setCode] = React.useState(member.code || '')
  const [id, setId] = React.useState(member.id || '')
  const [course, setCourse] = React.useState(
    member.course || 'Programación Básica',
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        onUpdate(index, { nameMember: value, code, id, course })
        break
      case 'code':
        setCode(value)
        onUpdate(index, { nameMember, code: value, id, course })
        break
      case 'id':
        setId(value)
        onUpdate(index, { nameMember, code, id: value, course })
        break
      case 'course':
        setCourse(value)
        onUpdate(index, { nameMember, code, id, course: value })
        break
      default:
        break
    }
  }

  const handleDelete = () => {
    onDelete(index)
  }

  return (
    <div className='mf-form'>
      <strong>Datos del Integrante</strong>
      <InputField
        label='Nombre'
        name='name'
        value={nameMember}
        onChange={handleChange}
        required
      />
      <InputField
        label='Código estudiantil'
        name='code'
        value={code}
        onChange={handleChange}
      />
      <InputField
        label='Cédula de Ciudadanía'
        name='id'
        value={id}
        onChange={handleChange}
        required
      />
      <SelectField
        label='Asignatura de programación que está cursando'
        options={[
          'Programación Básica',
          'Programación Orientada a Objetos',
          'Programación Avanzada',
          'Modelos de Programación 1',
          'Modelos de Programación 2',
        ]}
        name='course'
        value={course}
        onChange={handleChange}
        required
      />

      <button type='button' onClick={handleDelete}>
        Eliminar miembro
      </button>
    </div>
  )
}
