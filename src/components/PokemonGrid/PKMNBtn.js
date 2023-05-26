import React from 'react'
import pokeball from '../../assets/images/gibbygibson-ball.png';

export default function PKMNBtn ({ mon, sprName }) {
  let defSrc =  process.env.PUBLIC_URL+`/images/sprites/`+mon.NatNum+`/`+sprName;
  return (
  <div className='selectGridSquare'>
    <img src={pokeball} className="img-fluid selectGridPkmnBG" alt=""/>
    <img src={`${defSrc}`} className='img selectGridPkmn' alt=""/>
  </div>
);
}
