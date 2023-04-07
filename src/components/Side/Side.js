import React from 'react'
import './side.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined'; import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { Avatar } from '@mui/material';
import { useCartState } from '../../context/cartState';

function Side() {
    const [{ cardDisplay }, dispatch] = useCartState()
    const a = () => {
        console.log("object", cardDisplay);
        dispatch({
            type: "SET_CARD",
            dpImg: 'https://avatars.githubusercontent.com/u/70149386?v=4',
            dpName: 'Saurav',
        })
    }
    return (
        <>
            <div className="side" id='side'>
                <div className="sideTop">
                    <SpeakerNotesOutlinedIcon fontSize='medium' className='chatIcon' />
                    <DonutLargeIcon className='statusIcon' />
                </div>
                <div className="sideBottom">
                    <PowerSettingsNewOutlinedIcon className='logoutIcon' />
                    <span onClick={a}>
                        <Avatar className='userIcon' src="https://avatars.githubusercontent.com/u/70149386?v=4" sx={{ width: 40, height: 40 }} />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Side