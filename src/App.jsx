import React from 'react'
import './App.css'

import { TeamForm } from './components/TeamForm'
import { TeamSummary } from './components/TeamSummary'

export function App() {
  const [members, setMembers] = React.useState(() => {
    // window.localStorage.removeItem('members')
    const membersFromStorage = window.localStorage.getItem('members')
    return membersFromStorage ? JSON.parse(membersFromStorage) : []
  })

  const [teams, setTeams] = React.useState(() => {
    // window.localStorage.removeItem('teams')
    const teamsFromStorage = window.localStorage.getItem('teams')
    return teamsFromStorage ? JSON.parse(teamsFromStorage) : []
  })

  const handleAddTeam = (team) => {
    const newMembers = handleAddMembers(team.members)
    const newTeams = [...teams, team]
    setTeams(newTeams)
    saveData(newTeams, newMembers)
  }

  const handleRemoveTeam = (index) => {
    setTeams(teams.filter((team, i) => i !== index))
  }

  const handleAddMembers = (memberList) => {
    let newMembers = [...members]
    for (const member of memberList) {
      newMembers = [...newMembers, member]
      setMembers(newMembers)
    }
    return newMembers
  }

  const saveData = (newTeams, newMembers) => {
    window.localStorage.setItem('teams', JSON.stringify(newTeams))
    window.localStorage.setItem('members', JSON.stringify(newMembers))
  }

  return (
    <>
      <TeamSummary teamsList={teams} onRemoveTeam={handleRemoveTeam} />
      <TeamForm onSubmitTeam={handleAddTeam} />
    </>
  )
}
