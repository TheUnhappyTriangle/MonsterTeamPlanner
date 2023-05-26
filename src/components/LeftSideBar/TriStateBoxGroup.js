import React, { useState } from 'react';
import TriStateBox from './TriStateBox';

export default function TriStateBoxGroup(truIcon, nulIcon, falIcon, boxesAreLinked, labels, onGroupChange) {
  const boxes = [];
  let boxVals = [];

  labels.forEach((label, idx) => {
    let firstState = true;
    if (idx > 0 && boxesAreLinked) {
      firstState = null;
    }
    boxVals.push(firstState);
    boxes.push(<TriStateBox key={idx} posIcon={truIcon} neutIcon={nulIcon} negIcon={falIcon} curState={firstState} isLinked={boxesAreLinked} label={label} onBoxChange={handleGroupChange}/>)
  });

  const handleGroupChange = (boxId, newVal) => { 
    if (boxesAreLinked) {
      
    }
    boxVals[boxId] = newVal; onGroupChange(boxVals)
  }

  return (
    <div className='container-fluid'>
      <div className=''></div>
    </div>
  );
}
