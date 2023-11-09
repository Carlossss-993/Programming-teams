import { Team } from './Team'

export function TeamSummary({ teamsList, onRemoveTeam }) {
  return (
    <section className='ts-teamSummary'>
      <strong>Resumen de Equipos</strong>
      {teamsList.map((team, index) => (
        <Team
          key={index}
          index={index}
          team={team}
          onRemoveTeam={onRemoveTeam}
        />
      ))}
    </section>
  )
}
