import React from 'react'
import pokeball from './assets/images/gibbygibson-ball.png';

export default function PKMNBtn ({ mon }) {
  let defSrc =  `images/sprites/`+mon.NatNum+`/5_bw_reg.gif`;
  return (
  <div className='selectGridSquare'>
    <img src={pokeball} className="img-fluid selectGridPkmnBG" alt=""/>
    <img src={`${defSrc}`} className='img-fluid selectGridPkmn' alt=""/>
  </div>
);
}
