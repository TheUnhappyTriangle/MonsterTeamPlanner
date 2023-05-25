import React, { useState } from 'react';
import NavBar from './NavBar';
import TeamSection from './TeamSection';
import LSideBar from './LSideBar';
import PKMNGrid from './PKMNGrid';
import RBYData from './assets/Dexes/RBY_Dex.json';

const PKMNDATA = RBYData;

function App() {
  const [dexData, setDex] = useState(PKMNDATA);
  
  const [filterVals, setFilterVals] = useState({
    searchFilter:'',
    currentLvl: 100,
    inclTypes: [['Bug', 'Dragon', 'Electric', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 
                 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Water', 'Dark', 'Steel', 'Fairy']], 
    exclTypes: [''],
    inclNFE: true, inclMidEvo: true, inclFE: true, inclItemEvo: true, inclTradeEvo: true,
    inclReg: true, inclPseudo: true, inclLegend: true, inclMyth: true, 
    inclGift: true, inclAllVer: true, inclRExcl: true, inclBExcl: true, inclYExcl: true
  });

  const handleDexChange = (newDex) => { 
    switch (newDex) {
      case 0:
        setDex(PKMNDATA);
        break;
      case 1:
        setDex(PKMNDATA);
        break;
      case 2:
        setDex(PKMNDATA);
        break;
      case 3:
        setDex(PKMNDATA);
        break;
      case 4:
        setDex(PKMNDATA);
        break;
      case 5:
        setDex(PKMNDATA);
        break;
      case 6:
        setDex(PKMNDATA);
        break;
      default:
        setDex(PKMNDATA);
        break;
    }
  }
  const handleFilterChange = (newFilters) => { setFilterVals(newFilters) }
  /*
  const handleSortChange = (newSort) => { setSort(newSort) }
  const handleOptionChange = (newOptions) => { setOptionVals(newOptions) }
  */

  return (
    <>
      <NavBar />
      <div className="container-fluid mt-4 px-5">
        <TeamSection teamMembers={[PKMNDATA[5],PKMNDATA[25],PKMNDATA[67],PKMNDATA[93],PKMNDATA[142],PKMNDATA[130]]}/>
        <div className="row justify-content-center align-items-start g-2 my-2">
          <div className="col-lg-2 justify-content-center sidebarFollow">
            <LSideBar onChangeDex={handleDexChange} onChangeFilters={handleFilterChange}/>
          </div>
          <div className="col-lg-10 px-3">
            <PKMNGrid 
              mons={dexData} 
              searchFilter={filterVals.searchFilter} currentLvl={filterVals.currentLvl} 
              inclTypes={filterVals.inclTypes} exclTypes={filterVals.exclTypes} 
              inclNFE={filterVals.inclNFE} inclMidEvo={filterVals.inclMidEvo} inclFE={filterVals.inclFE} inclItemEvo={filterVals.inclItemEvo} inclTradeEvo={filterVals.inclTradeEvo}
              inclReg={filterVals.inclReg} inclPseudo={filterVals.inclPseudo} inclLegend={filterVals.inclLegend} inclMyth={filterVals.inclMyth} 
              inclGift={filterVals.inclGift} inclAllVer={filterVals.inclAllVer} inclRExcl={filterVals.inclRExcl} inclBExcl={filterVals.inclBExcl} inclYExcl={filterVals.inclYExcl}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
