import React, {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import TriStateBox from './TriStateBox.js'

const defaultDex = 1;

export default function LSideBar({ onChangeDex, onChangeFilters }) {
  const[radVal, setRadVal] = useState(defaultDex);
  
  const dexes = [
    {name: 'National Dex', id: 0},
    {name: 'RBY Dex', id: 1},
    {name: 'GSC Dex', id: 2},
    {name: 'RSE Dex', id: 3}, {name: 'FRLG Dex', id: 4}, {name: 'Colosseum Dex', id: 5}, {name: 'XD Dex', id: 6}
  ];

  const types = [
    {name: 'Bug', original_gen: 1, id: 0},       {name: 'Dragon', original_gen: 1, id: 1},  {name: 'Electric', original_gen: 1, id: 2}, 
    {name: 'Fighting', original_gen: 1, id: 3},  {name: 'Fire', original_gen: 1, id: 4},    {name: 'Flying', original_gen: 1, id: 5}, 
    {name: 'Ghost', original_gen: 1, id: 6},     {name: 'Grass', original_gen: 1, id: 7},   {name: 'Ground', original_gen: 1, id: 8}, 
    {name: 'Ice', original_gen: 1, id: 9},       {name: 'Normal', original_gen: 1, id: 10}, {name: 'Poison', original_gen: 1, id: 11},
    {name: 'Psychic', original_gen: 1, id: 12},  {name: 'Rock', original_gen: 1, id: 13},   {name: 'Water', original_gen: 1, id: 14}, 
    {name: 'Dark', original_gen: 2, id: 15},     {name: 'Steel', original_gen: 2, id: 16}, 
    {name: 'Fairy', original_gen: 6, id: 17}
  ];

  const typeMenu = (
    <Popover id="popover-basic" className='popoverMenu popoverBody'>
      <Popover.Header as='h3' className='text-center popoverMenu'>✓=Included /=Not Included X=Excluded</Popover.Header>
      <Popover.Body className='popoverMenu popoverBody'>
        <div className='container-fluid'>
          <div className='row justify-content-center align-items-center my-1'>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[0].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[1].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[2].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[3].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[4].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[5].name}/></div>
          </div>
          <div className='row justify-content-center align-items-center my-1'>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[6].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[7].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[8].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[9].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[10].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[11].name}/></div>
          </div>
          <div className='row justify-content-center align-items-center my-1'>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[12].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[13].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[14].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[15].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[16].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label={types[17].name}/></div>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );

  const evoMenu = (
    <Popover id="popover-basic" className='popoverMenu popoverBody'>
      <Popover.Header as='h3' className='text-center popoverMenu'>✓=Included /=Not Included X=Excluded</Popover.Header>
      <Popover.Body className='popoverMenu popoverBody'>
        <div className='container-fluid'>
          <div className='row justify-content-center align-items-center my-1'>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Not Fully Evolved'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Mid Stage Evos'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Fully Evolved'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Branch Evos'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Cross Gen Evos'/></div>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );

  const methodMenu = (
    <Popover id="popover-basic" className='popoverMenu popoverBody'>
      <Popover.Header as='h3' className='text-center popoverMenu'>✓=Included /=Not Included X=Excluded</Popover.Header>
      <Popover.Body className='popoverMenu popoverBody'>
        <div className='container-fluid'>
          <div className='row justify-content-center align-items-center my-1'>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Level'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Item'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Trade'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Friend'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Time'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Location'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Move'/></div>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );

  const catMenu = (
    <Popover id="popover-basic" className='popoverMenu popoverBody'>
      <Popover.Header as='h3' className='text-center popoverMenu'>✓=Included /=Not Included X=Excluded</Popover.Header>
      <Popover.Body className='popoverMenu popoverBody'>
        <div className='container-fluid'>
          <div className='row justify-content-center align-items-center my-1'>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Not Legendary'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Pseudo Legendary'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Sub Legendary'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Legendary'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Myth'/></div>
            
          </div>
          <div className='row justify-content-center align-items-center my-1'>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Starter'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Fossil'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Baby'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Ultra Beast'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Paradox'/></div>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );

  const verMenu = (
    <Popover id="popover-basic" className='popoverMenu popoverBody'>
      <Popover.Header as='h3' className='text-center popoverMenu'>✓=Included /=Not Included X=Excluded</Popover.Header>
      <Popover.Body className='popoverMenu popoverBody'>
        <div className='container-fluid'>
          <div className='row justify-content-center align-items-center my-1'>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='All Versions'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Red Exclusive'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Blue Exclusive'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Yellow Exclusive'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' defState={true} label='Transfer Only'/></div>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );

  const handleDexChange = (newDex) => { setRadVal(newDex); onChangeDex(newDex); }
  const handleFilterChange = (newFilters) => { onChangeFilters(newFilters); }

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Game/Dex</Accordion.Header>
        <Accordion.Body>
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center g-2">
              <div className="col">
                <div className='d-grid gap-2 overlayparent'>
                  <ButtonGroup size='sm' vertical className='overlayBG border border-dark rounded'>
                    {dexes.map((dex, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`dex-${dex.id}`}
                        type='radio'
                        variant='outline-dark'
                        name='radio'
                        value={dex.id}
                        checked={radVal === dex.id}
                        onChange={(e) => handleDexChange(dex.id)}
                        style={{objectFit: 'contain'}}
                        className='overlayFG'>{dex.name}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Filters</Accordion.Header>
        <Accordion.Body>
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center g-2">
              <div className="col">
                <div className='d-grid gap-2 overlayparent'>
                  <ButtonGroup vertical className='border border-dark rounded'>
                    <OverlayTrigger trigger="click" rootClose placement='right' overlay={typeMenu}>
                      <Button variant='outline-dark' size='sm'>Types</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" rootClose placement='right' overlay={evoMenu}>
                      <Button variant='outline-dark' size='sm'>Evolution Stages</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" rootClose placement='right' overlay={methodMenu}>
                      <Button variant='outline-dark' size='sm'>Evolution Methods</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" rootClose placement='right' overlay={catMenu}>
                      <Button variant='outline-dark' size='sm'>Categories</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" rootClose placement='right' overlay={verMenu}>
                      <Button variant='outline-dark' size='sm'>Versions</Button>
                    </OverlayTrigger>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

/* <Accordion.Item eventKey="2">
        <Accordion.Header>Sorts</Accordion.Header>
        <Accordion.Body>
          <div className="container-fluid">
              <div className="row justify-content-center align-items-center g-2">
                <div className="col">
                  <ButtonGroup vertical>
                    <div className='container-fluid'>
                      <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' defState={true} label='Numerical'/></div></div>
                      <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' defState={null} label='Relational'/></div></div>
                      <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' defState={null} label='Alphabetical'/></div></div>
                      <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' defState={null} label='Base Stat Total'/></div></div>
                      <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' defState={null} label='Health'/></div></div>
                      <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' defState={null} label='Attack'/></div></div>
                      <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' defState={null} label='Special Attack'/></div></div>
                      <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' defState={null} label='Defense'/></div></div>
                      <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' defState={null} label='Special Defense'/></div></div>
                      <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' defState={null} label='Speed'/></div></div>
                      <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' defState={null} label='Weight'/></div></div>
                      <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' defState={null} label='Height'/></div></div>
                    </div>
                  </ButtonGroup>
                </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Options</Accordion.Header>
        <Accordion.Body>
          <ButtonGroup vertical>
            
          </ButtonGroup>
        </Accordion.Body>
      </Accordion.Item> */