import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function TriStateBox({ posIcon, neutIcon, negIcon, curState, label, onBoxChange }) {
    const [boxState, setBoxState] = useState(curState);
    const initialBoxState = useRef(curState);
    
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
    };

    const getBoxIcon = (bState) => {
        switch(bState) {
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
    //const [boxIcon, setBoxIcon] = useState(getBoxIcon(curState));

    useEffect(() => {
        if (boxState !== initialBoxState.current) {
            onBoxChange(boxState);
            initialBoxState.current = boxState;
        }
    }, [boxState, onBoxChange]);

    return (
        <div className='d-grid gap-2'>
            <Button variant='btn btn-outline-dark' size='sm' onClick={handleBoxChange} className='tristate-button'>
                <div className='tristate-content'>
                    <span className='tristate-icon'>{getBoxIcon(boxState)}</span>
                    <span className='tristate-divider'>|</span>
                    <span className='tristate-label'>{label}</span>
                </div>
            </Button>
        </div>
    );
}