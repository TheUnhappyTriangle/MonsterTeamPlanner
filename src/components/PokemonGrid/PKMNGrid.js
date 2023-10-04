import React, { useEffect, useState } from 'react'
import PKMNData from '../../assets/Data/Dex_IDs.json';
import PKMNBtn from './PKMNBtn';

export default function PKMNGrid({ pkDex, filTypes }) {
  // pkDex: {id, name, gen, region, regTot, availTot, defSpr}
  let dexPkmn = PKMNData;
  switch(pkDex.id) {
    case 0: // Nat
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.id - b.id;
      });
      break;
    case 1: // Relational
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.relational_id - b.relational_id;
      });
      break;
    case 2: // RBY
      dexPkmn = dexPkmn.filter(mon => mon.rby_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.rby_id - b.rby_id;
      });
      break;
    case 3: // GSC
      dexPkmn = dexPkmn.filter(mon => mon.gsc_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.gsc_id - b.gsc_id;
      });
      break;
    case 4: // RSE
      dexPkmn = dexPkmn.filter(mon => mon.rse_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.rse_id - b.rse_id;
      });
      break;
    case 5: // Col
      dexPkmn = dexPkmn.filter(mon => mon.col_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.col_id - b.col_id;
      });
      break;
    case 6: // FRLG
      dexPkmn = dexPkmn.filter(mon => mon.frlg_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.frlg_id - b.frlg_id;
      });
      break;
    case 7: // XD
      dexPkmn = dexPkmn.filter(mon => mon.xd_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.xd_id - b.xd_id;
      });
      break;
    case 8: // DP
      dexPkmn = dexPkmn.filter(mon => mon.dp_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.dp_id - b.dp_id;
      });
      break;
    case 9: // Plat
      dexPkmn = dexPkmn.filter(mon => mon.pt_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.pt_id - b.pt_id;
      });
      break;
    case 10: // HGSS
      dexPkmn = dexPkmn.filter(mon => mon.hgss_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.hgss_id - b.hgss_id;
      });
      break;
    case 11: // BW
      dexPkmn = dexPkmn.filter(mon => mon.bw_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.bw_id - b.bw_id;
      });
      break;
    case 12: // B2W2
      dexPkmn = dexPkmn.filter(mon => mon.b2w2_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.b2w2_id - b.b2w2_id;
      });
      break;
    case 13: // XY
      dexPkmn = dexPkmn.filter(mon => mon.xy_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.xy_id - b.xy_id;
      });
      break;
    case 14: // ORAS
      dexPkmn = dexPkmn.filter(mon => mon.oras_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.oras_id - b.oras_id;
      });
      break;
    case 15: // SuMo
      dexPkmn = dexPkmn.filter(mon => mon.sumo_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.sumo_id - b.sumo_id;
      });
      break;
    case 16: // USUM
      dexPkmn = dexPkmn.filter(mon => mon.usum_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.usum_id - b.usum_id;
      });
      break;
    case 17: // LGPE
      dexPkmn = dexPkmn.filter(mon => mon.lgpe_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.lgpe_id - b.lgpe_id;
      });
      break;
    case 18: // SwSh
      dexPkmn = dexPkmn.filter(mon => mon.swsh_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.swsh_id - b.swsh_id;
      });
      break;
    case 19: // BDSP
      dexPkmn = dexPkmn.filter(mon => mon.bdsp_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.bdsp_id - b.bdsp_id;
      });
      break;
    case 20: // PLA
      dexPkmn = dexPkmn.filter(mon => mon.pla_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.pla_id - b.pla_id;
      });
      break;
    case 21: // SV
      dexPkmn = dexPkmn.filter(mon => mon.scvi_id !== null);
      dexPkmn = dexPkmn.sort(function(a,b) {
        return a.scvi_id - b.scvi_id;
      });
      break;
    default: // Nat
      dexPkmn = PKMNData;
      break;
  }
  const [filteredPkData, setFilteredPkData] = useState(dexPkmn);
  
  const cols = [];
  cols.push(<div className='col-12'><p className='text-center'>{pkDex.name}</p></div>);

  useEffect(() => {
    //console.log("PGrid - useEffect -> "+filTypes[0].label+" "+filTypes[0].state);
    //console.log(filTypes)
    const updatedPkData = dexPkmn; /*.filter((mon) => {
      let typeVal = [];
      typeVal.push(filTypes.find( t => t.label === mon.Type1).state);
      if (mon.Type2 === null || mon.Type2 === '') { typeVal.push(null) }
      else {typeVal.push(filTypes.find( t => t.label === mon.Type2).state)}    
      if (typeVal[0] === typeVal[1]) { return typeVal[0]; }
      else { return (typeVal[0]!==false && typeVal[1]!==false); }
    });*/
    setFilteredPkData(updatedPkData);
  }, [dexPkmn, filTypes]);

  filteredPkData.forEach((mon, idx) => {
    console.log(pkDex.defSprite)
    cols.push(<div className='col-1' key={idx}><PKMNBtn mon={mon} sprName={pkDex.defSprite} key={idx}/></div>);
  });

  return (
    <div className="container-fluid">
      <div className="row justify-content-start g-2">
        {cols}
      </div>
    </div>
  );
}

