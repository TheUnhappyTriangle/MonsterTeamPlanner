import React, {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import TriStateBox from './TriStateBox.js'

export default function LSideBar({ onChangeDex, onChangeFilters }) {
  const[radVal, setRadVal] = useState('1');
  
  const dexes = [
    {name: 'National Dex', val: '0'},
    {name: 'RBY Dex', val: '1'},
    {name: 'GSC Dex', val: '2'},
    {name: 'RSE Dex', val: '3'}, {name: 'FRLG Dex', val: '4'}, {name: 'Colosseum Dex', val: '5'}, {name: 'XD Dex', val: '6'}
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
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[0].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[1].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[2].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[3].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[4].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[5].name}/></div>
          </div>
          <div className='row justify-content-center align-items-center my-1'>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[6].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[7].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[8].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[9].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[10].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[11].name}/></div>
          </div>
          <div className='row justify-content-center align-items-center my-1'>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[12].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[13].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[14].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[15].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[16].name}/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label={types[17].name}/></div>
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
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Not Fully Evolved'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Mid Stage Evos'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Fully Evolved'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Branch Evos'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Cross Gen Evos'/></div>
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
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Level'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Item'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Trade'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Friend'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Time'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Location'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Move'/></div>
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
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Not Legendary'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Pseudo Legendary'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Sub Legendary'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Legendary'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Myth'/></div>
            
          </div>
          <div className='row justify-content-center align-items-center my-1'>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Starter'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Fossil'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Baby'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Ultra Beast'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Paradox'/></div>
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
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='All Versions'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Red Exclusive'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Blue Exclusive'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Yellow Exclusive'/></div>
            <div className='col'><TriStateBox posIcon='✓' neutIcon='/' negIcon='X' label='Transfer Only'/></div>
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
                        id={`dex-${dex.val}`}
                        type='radio'
                        variant='outline-dark'
                        name='radio'
                        value={dex.val}
                        checked={radVal === dex.val}
                        onChange={(e) => handleDexChange(dex.val)}
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
                    <OverlayTrigger trigger="click" placement='right' overlay={typeMenu}>
                      <Button variant='outline-dark' size='sm'>Types</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement='right' overlay={evoMenu}>
                      <Button variant='outline-dark' size='sm'>Evolution Stages</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement='right' overlay={methodMenu}>
                      <Button variant='outline-dark' size='sm'>Evolution Methods</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement='right' overlay={catMenu}>
                      <Button variant='outline-dark' size='sm'>Categories</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement='right' overlay={verMenu}>
                      <Button variant='outline-dark' size='sm'>Versions</Button>
                    </OverlayTrigger>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Sorts</Accordion.Header>
        <Accordion.Body>
          <ButtonGroup vertical>
          <div className='container-fluid'>
            <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' label='Numerical'/></div></div>
            <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' label='Relational'/></div></div>
            <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' label='Alphabetical'/></div></div>
            <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' label='Base Stat Total'/></div></div>
            <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' label='Health'/></div></div>
            <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' label='Attack'/></div></div>
            <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' label='Special Attack'/></div></div>
            <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' label='Defense'/></div></div>
            <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' label='Special Defense'/></div></div>
            <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' label='Speed'/></div></div>
            <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' label='Weight'/></div></div>
            <div className='row justify-content-center align-items-center my-1'><div className='col'><TriStateBox posIcon='^' neutIcon='-' negIcon='V' label='Height'/></div></div>
        </div>
          </ButtonGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Options</Accordion.Header>
        <Accordion.Body>
          <ButtonGroup vertical>
            
          </ButtonGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
