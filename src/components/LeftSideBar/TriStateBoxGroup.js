import React, { useState } from 'react';
import TriStateBox from './TriStateBox';

export default function TriStateBoxGroup({ truIcon, nulIcon, falIcon, firstState, btnLabels, onGroupChange }) {
  const initialState = [];
  btnLabels.forEach((label,idx) => {
    initialState.push({ id: idx, label: label, state: firstState})
  });
  const [boxStates, setBoxStates] = useState(initialState);

  const handleBoxChange = (boxId, newState) => {
    const updatedStates = boxStates.map((box) =>
      box.id === boxId ? { ...box, state: newState } : box
    );
    setBoxStates(updatedStates);
    console.log("TSBG - handleBoxChange -> "+boxStates[0].label+" "+boxStates[0].state+"-("+boxId+" "+newState+")");
    console.log(boxStates);
    onGroupChange(updatedStates);
  };

  const handleControlBoxChange = (newState) => {
    const updatedStates = boxStates.map((box) => ({
      ...box, state: newState,
    }));
    setBoxStates(updatedStates);
    onGroupChange(updatedStates);
  };

  return (
      <div className='container'>
        <div className='row justify-content-center align-items-center g-2'>
          <div className='col-12'>
              <TriStateBox 
                  posIcon={truIcon} neutIcon={nulIcon} negIcon={falIcon}
                  curState={firstState}
                  label={"All"}
                  onBoxChange={(newState) => handleControlBoxChange(newState) }
                />
            </div>
          {boxStates.map((box) => (
            <div className={'col-4'} key={box.id}>
              <TriStateBox 
                posIcon={truIcon} neutIcon={nulIcon} negIcon={falIcon}
                curState={box.state}
                label={box.label}
                onBoxChange={(newState) => handleBoxChange(box.id,newState) }
              />
            </div>
          ))}
        </div>
      </div>
  );
}
