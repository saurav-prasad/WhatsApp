import React from 'react'
import './side.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined'; import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { Avatar } from '@mui/material';
import { useLoginState } from '../loginContext/loginState';

function Side() {
    const [{ user }, loginDispatch] = useLoginState()

    const logout = () => {
        loginDispatch({
            type: 'UNSET_USER',
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
                    <abbr title='Logout'><PowerSettingsNewOutlinedIcon onClick={logout} className='logoutIcon' /></abbr>
                    <span>
                        <Avatar className='userIcon' src={user.photoURL} sx={{ width: 40, height: 40 }} />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Side