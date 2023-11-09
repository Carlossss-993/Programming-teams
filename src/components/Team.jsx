export function Team({ team, index, onRemoveTeam }) {
  const handleRemoveTeam = () => {
    console.log(typeof onRemoveTeam)
    onRemoveTeam(index)
  }
  return (
    <article className='t-team'>
      <strong>Nombre: {team.teamName}</strong>
      <p>Cantidad de Participantes: {team.members.length}</p>
      <p>Categoría a Participar: {team.teamLevel}</p>
      <button onClick={handleRemoveTeam}>Eliminar Equipo</button>
    </article>
  )
}
