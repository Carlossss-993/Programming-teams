import React from 'react'
import './App.css'

import { TeamForm } from './components/TeamForm'
import { TeamSummary } from './components/TeamSummary'
import { RegisterContests } from './components/RegisterContests'
import { ContestRegistration } from './components/ContestRegistration'

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

  const [contests, setContests] = React.useState(() => {
    // window.localStorage.removeItem('contests')
    const contestsFromStorage = window.localStorage.getItem('contests')
    return contestsFromStorage ? JSON.parse(contestsFromStorage) : []
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

  const handleRemoveContest = (index) => {
    setContests(contests.filter((contestAux, i) => i !== index))
  }

  const handleAddMembers = (memberList) => {
    let newMembers = [...members]
    for (const member of memberList) {
      newMembers = [...newMembers, member]
      setMembers(newMembers)
    }
    return newMembers
  }

  const handleAddContests = (contest) => {
    const newContests = [...contests, contest]
    setContests(newContests)
    saveContest(newContests)
    console.log(newContests)
  }

  const saveData = (newTeams, newMembers) => {
    newTeams && window.localStorage.setItem('teams', JSON.stringify(newTeams))
    newMembers &&
      window.localStorage.setItem('members', JSON.stringify(newMembers))
  }

  const saveContest = (newContests) => {
    newContests &&
      window.localStorage.setItem('contests', JSON.stringify(newContests))
  }

  return (
    <>
      <TeamSummary teamsList={teams} onRemoveTeam={handleRemoveTeam} />
      <TeamForm onSubmitTeam={handleAddTeam} />
      <RegisterContests onAddContests={handleAddContests} />
      <ContestRegistration
        contests={contests}
        onRemoveContest={handleRemoveContest}
      />
    </>
  )
}
