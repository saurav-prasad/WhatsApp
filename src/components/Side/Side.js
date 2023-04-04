import React from 'react'
import './side.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { Avatar } from '@mui/material';

function Side() {
    return (
        <>
            <div className="side">
                <div className="sideTop">
                    <SpeakerNotesOutlinedIcon fontSize='medium' className='chatIcon' />
                    <DonutLargeIcon className='statusIcon'/>
                </div>
                <div className="sideBottom">
                    <PowerSettingsNewOutlinedIcon className='logoutIcon'/>
                    <Avatar className='userIcon' src="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=1600"  sx={{ width: 40, height: 40 }}/>
                </div>
            </div>
        </>
    )
}

export default Side