import React from 'react';
import pokeball from './assets/images/gibbygibson-ball.png';
import CloseButton from 'react-bootstrap/CloseButton';

export default function TeamSlot({ partyMember } ) {
  let defSrc =  `images/sprites/`+partyMember.NatNum+`/5_bw_reg.gif`;
  return (
    <div className='teamslot'>
        <div className='removeBtn'><CloseButton aria-label='Remove' /></div>
        <img src={pokeball} className="img-fluid pkball" alt=""/>
        <img src={``} className="img-fluid teamPkmn" alt="Select a Mon"/>
        <p className='text-center'>{partyMember.Type1}  {partyMember.Type2}</p>
    </div>
  );
}
