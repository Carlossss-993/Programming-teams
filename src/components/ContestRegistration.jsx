import { Contest } from './Contest'
import { v4 } from 'uuid'

export const ContestRegistration = ({ contests, onRemoveContest }) => {
  console.log('render')
  return (
    <section>
      <strong>Competencias Disponibles</strong>
      {contests.map((contest, index) => (
        <Contest
          key={v4()}
          index={index}
          contest={contest}
          onRemoveContest={onRemoveContest}
        />
      ))}
    </section>

    //   {members.map((member, index) => (
    //     <MemberForm
    //       key={index}
    //       index={index}
    //       member={member}
    //       onDelete={handleDeleteMember}
    //       onUpdate={handleUpdateMember}
    //     />
    //   ))}
  )
}
