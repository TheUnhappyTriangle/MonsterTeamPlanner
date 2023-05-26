import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import pokeball from '../../assets/images/gibbygibson-ball.png';

export default function TeamSlot({ partyMember } ) {
  let defSrc =  `/images/sprites/`+partyMember.NatNum+`/5_bw_reg.gif`;
  return (
    <div className='teamslot'>
        <div className='removeBtn'><CloseButton aria-label='Remove' /></div>
        <img src={pokeball} className="img-fluid pkball" alt=""/>
        <img src={process.env.PUBLIC_URL +`${defSrc}`} className="img-fluid teamPkmn" alt="Select a Mon"/>
    </div>
  );
}
