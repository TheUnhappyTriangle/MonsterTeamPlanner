import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TeamSection from './components/TeamSection/TeamSection';
import LSideBar from './components/LeftSideBar/LSideBar';
import PKMNGrid from './components/PokemonGrid/PKMNGrid';
import DexInfo from './assets/Data/Dex_Info.json';

function App() {
  const [dexData_id, setDex] = useState(0);
  const handleDexChange = (newDex) => { setDex(newDex); }

  const defTypeFils = [{ id: 0, label: 'Bug', state: true},{ id: 1, label: 'Dragon', state: true}, { id: 2, label: 'Electric', state: true},
                       { id: 3, label: 'Fighting', state: true},{ id: 4, label: 'Fire', state: true}, { id: 5, label: 'Flying', state: true},
                       { id: 6, label: 'Ghost', state: true},{ id: 7, label: 'Grass', state: true}, { id: 8, label: 'Ground', state: true},
                       { id: 9, label: 'Ice', state: true},{ id: 10, label: 'Normal', state: true},{ id: 11, label: 'Poison', state: true},
                       { id: 12, label: 'Psychic', state: true},{ id: 13, label: 'Rock', state: true},{ id: 14, label: 'Water', state: true},
                       { id: 15, label: 'Dark', state: true},{ id: 16, label: 'Steel', state: true},{ id: 17, label: 'Fairy', state: true}]
  const [filterVals, setFilterVals] = useState({
    searchFilter: '',
    lvlCap: 100,
    typeVals: defTypeFils 
  });
  const handleTypeFilterChange = (newTypeFilters) => {
    let newFilters = { ...filterVals };
    newFilters.typeVals = newTypeFilters;
    console.log("App - handleTypeFilterChange -> "+newTypeFilters[0].label+" "+newTypeFilters[0].state);
    setFilterVals(newFilters);
  }
  /*
  const handleSortChange = (newSort) => { setSort(newSort) }
  const handleOptionChange = (newOptions) => { setOptionVals(newOptions) }
  */

  return (
    <>
      
      <div className="container-fluid mt-4 mb-10 px-5">
        <div className="row justify-content-center align-items-start g-2 my-2">
          <div className="col-lg-2 justify-content-center sidebarFollow">
            <LSideBar onChangeDex={handleDexChange} onTypeFilterChange={handleTypeFilterChange}/>
          </div>
          <div id='monsterGrid' className="col-lg-10 px-3">
            <PKMNGrid 
              pkDex={DexInfo[dexData_id]} 
              filTypes={filterVals.typeVals}
              />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/* 
  <NavBar />
  <TeamSection teamMembers={[dexInfo[dexData_id].data[0], dexInfo[dexData_id].data[1], dexInfo[dexData_id].data[2],
                                   dexInfo[dexData_id].data[3],dexInfo[dexData_id].data[4],dexInfo[dexData_id].data[5]]}/>
  Kanto 5,25,67,93,141,129
  Col 0,1,3,23,40,47
*/