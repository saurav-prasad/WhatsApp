import React, { useState } from 'react'
import './dp.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useCartState } from '../../context/cartState';

function Dp() {
    const [{ cardDisplay, dpImg, dpName }, dispatch] = useCartState()
    console.log("card", cardDisplay);
    const toggleCard = () => {
        dispatch({
            type: "UNSET_CARD",
        })
    }
    return (
        <>
            <div className="dp" style={cardDisplay} id='dpCard'>
                <div className='dpContainer'>
                    <div className='dpHeader'>
                        <h3>{dpName}</h3>
                        <CloseRoundedIcon onClick={toggleCard} className='crossIcon' />
                    </div>
                    <img className='dpImg' src={dpImg} alt="" />
                </div>
            </div>
        </>
    )
}

export default Dp