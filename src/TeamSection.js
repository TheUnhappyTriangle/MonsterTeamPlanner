import React from 'react'
import TeamSlot from './TeamSlot'

export default function TeamSection({teamMembers}) {
  const slots = [];
  
  teamMembers.forEach((teamMember) => {
    slots.push(<div className='col'><TeamSlot partyMember={teamMember} key={teamMember.NatNum}/></div>);
  });

  return (
    <div className='row justify-content-center align-items-center'>
        {slots}
    </div>
  );
}
