import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function TriStateBox({ posIcon, neutIcon, negIcon, curState, isLinked, label, onBoxChange }) {
    const [boxState, setBoxState] = useState(curState);

    const handleBoxChange = () => {
        switch(boxState) {
            case true:
                setBoxState(null);
                break;
            case null:
                setBoxState(false);
                break;
            case false:
                setBoxState(true);
                break;
            default:
                break;
        }
        onBoxChange(boxState);
    };

    const getBoxIcon = () => {
        switch(boxState) {
            case true:
                return posIcon;
            case null:
                return neutIcon;
            case false:
                return negIcon;
            default:
                break;
        }
    };

    return (
        <div className='container-fluid'>
            <div className='row justify-content-start align-items-center'>
                <div className='col-md-1 align-items-center'>
                    <Button variant='btn btn-dark squareBtn' size='sm' onClick={handleBoxChange}>{getBoxIcon()} </Button>
                </div>
                <div className='col-md-8 offset-md-1 text-right align-text-center'>{label}</div>
            </div>
        </div>
    );
}
