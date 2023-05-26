import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TeamSection from './components/TeamSection/TeamSection';
import LSideBar from './components/LeftSideBar/LSideBar';
import PKMNGrid from './components/PokemonGrid/PKMNGrid';
import RBYData from './assets/Dexes/RBY_Dex.json';
import GSCData from './assets/Dexes/GSC_Dex.json';
import RSEData from './assets/Dexes/RSE_Dex.json';
import ColData from './assets/Dexes/Col_Chron.json';
import XDData from './assets/Dexes/XD_Chron.json';


const PKMNDATA = RBYData;
const LATESTGEN = 3;

function App() {
  const [dexData_id, setDex] = useState(1);

  const dexInfo = [
    {name: 'National Dex', id: 0, gen: LATESTGEN, sprName: '5_bw_reg.gif', data: RBYData},
    {name: 'RBY Dex', id: 1, gen: 1, sprName: '1_y_reg.png', data: RBYData},
    {name: 'GSC Dex', id: 2, gen: 2, sprName: '2_c_reg.gif', data: GSCData},
    {name: 'RSE Dex', id: 3, gen: 3, sprName: '3_e_reg.gif', data: RSEData}, {name: 'FRLG Dex', id: 4, gen: 3, sprName: '3_fl_reg.png', data: RBYData}, 
    {name: 'Colosseum Dex', id: 5, gen: 3, sprName: '3_rs_reg.png', data: ColData}, {name: 'XD Dex', id: 6, gen: 3, sprName: '3_e_reg.gif', data: XDData}
  ];

  const handleDexChange = (newDex) => { setDex(newDex); }
  
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

  
  const handleFilterChange = (newFilters) => { setFilterVals(newFilters) }
  /*
  const handleSortChange = (newSort) => { setSort(newSort) }
  const handleOptionChange = (newOptions) => { setOptionVals(newOptions) }
  */

  return (
    <>
      <NavBar />
      <div className="container-fluid mt-4 mb-10 px-5">
        <TeamSection teamMembers={[dexInfo[dexData_id].data[5], dexInfo[dexData_id].data[25], dexInfo[dexData_id].data[67],
                                   dexInfo[dexData_id].data[93],dexInfo[dexData_id].data[142],dexInfo[dexData_id].data[130]]}/>
        <div className="row justify-content-center align-items-start g-2 my-2">
          <div className="col-lg-2 justify-content-center sidebarFollow">
            <LSideBar onChangeDex={handleDexChange} onChangeFilters={handleFilterChange}/>
          </div>
          <div className="col-lg-10 px-3">
            <PKMNGrid 
              pkDex={dexInfo[dexData_id]} 
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

/* 
  Kanto 5,25,67,93,141,129
  Col 0,1,3,23,40,47
*/