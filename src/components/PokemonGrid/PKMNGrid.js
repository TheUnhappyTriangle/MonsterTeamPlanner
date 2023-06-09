import React from 'react'
import PKMNBtn from './PKMNBtn';

export default function PKMNGrid({ pkDex, searchFilter, currentLvl, inclTypes, exclTypes, inclNFE, inclMidEvo, inclFE, inclItemEvo, inclTradeEvo, inclReg, inclPseudo, inclLegend, inclMyth, inclStarter, inclGift, inclAllVer, inclRExcl, inclBExcl, inclYExcl}) {
  const cols = [];

  cols.push(<div className='col-12'><p className='text-center'>{pkDex.name}</p></div>);


  pkDex.data.forEach((mon) => {
    /*switch (mon.NatNum) {
      case 1:
        cols.push(<div className='col-12'><p className='text-center'>Kanto</p></div>);
        break;
      case 152:
        cols.push(<div className='col-12'><p className='text-center'>Johto</p></div>);
        break;
      case 252:
        cols.push(<div className='col-12'><p className='text-center'>Hoenn</p></div>);
        break;
      default:
        break;
    }*/

    let passedSearch = true //(mon.Name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1)
    let passedLvl = true//(mon.LvlMin < currentLvl)
    let passedTypes = true//((inclTypes.indexOf('') === -1) && (inclTypes.indexOf(mon.Type1) !== -1 || inclTypes.indexOf(mon.Type2) !== -1)
                    //&& (exclTypes.indexOf('') !== -1 || !(exclTypes.indexOf(mon.Type1) !== -1 || exclTypes.indexOf(mon.Type2) !== -1)))
    let passedEvo = true//((inclNFE && !mon.IsFullyEvolved)||(inclFE && mon.IsFullyEvolved)||(inclMidEvo && mon.IsMidStageEvo)||(inclItemEvo && mon.IsItemEvo)||(inclTradeEvo && mon.IsTradeEvo))
    let passedCategory = true//((inclReg && !(mon.IsMyth || mon.IsLegend))||(inclPseudo && mon.IsPsuedo)||(inclLegend && mon.IsLegend)||(inclMyth && mon.IsMyth)||(inclStarter && mon.IsStarter)||(inclGift && mon.IsGift))
    let passedVersion = true//((inclAllVer && !(mon.RedExcl || mon.BlueExcl || mon.YellowExcl))||(inclRExcl && mon.RedExcl)||(inclBExcl && mon.BlueExcl)||(inclYExcl && mon.YellowExcl))
    // Search && Level && Type && EvoStage && Category && GameVer
    if (passedSearch && passedLvl && passedTypes && passedEvo && passedCategory && passedVersion) 
      {cols.push(<div className='col-1'><PKMNBtn mon={mon} sprName={pkDex.sprName} key={mon.Name}/></div>);}
  });

  return (
    <div className="container-fluid">
      <div className="row justify-content-start g-2">
        {cols}
      </div>
    </div>
  );
}

