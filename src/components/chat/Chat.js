import React from 'react'
import './chat.css'
import { Avatar } from '@mui/material'
import { useCartState1 } from '../../context copy/cartState'
import { useCartState } from '../../context/cartState'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

function Chat() {
    const [{ chatImg, chatName }, dispatch] = useCartState1()
    const [{ }, dispatch1] = useCartState()
    const sidebarChatAvatar = () => {
        dispatch1({
            type: "SET_CARD",
            dpImg: chatImg,
            dpName: chatName,
        })
    }
    return (
        <>
            <div className='chat'  id='chat'>
                <div className="chatContainer">
                    <div className="chatHeader">
                        <ArrowBackRoundedIcon className='leftarrowIcon'/>
                        <Avatar className='chatAvatar'
                            onClick={sidebarChatAvatar}
                            alt="Remy Sharp"
                            src={chatImg}
                            sx={{ width: 40, height: 40 }}
                        />
                        <div className='chatHeaderRight'>
                            <h3>{chatName}</h3>
                            <p>Last seen</p>
                        </div>
                    </div>
                    <div className="chatRight">
                        <VideocamOutlinedIcon sx={{ width: 23, height: 23 }} className='callIcon' />
                        <CallOutlinedIcon sx={{ width: 23, height: 23 }} className='callIcon' />
                        <SearchRoundedIcon sx={{ width: 23, height: 23 }} className='callIcon' />
                    </div>
                </div>
                <div className='chatTextContainer'>
                </div>
                <div className="c sidebarSearch">
                    <div className='siderbarSearchContainer chatContainerBox'>
                        <SentimentSatisfiedAltRoundedIcon sx={{ width: 23, height: 23 }} className='chatIcon' />
                        <AttachFileRoundedIcon sx={{ width: 23, height: 23 }} className='chatIcon' />
                        <input type="text" placeholder='Type a message' className='chatInput' />
                        <MicRoundedIcon sx={{ width: 23, height: 23 }} className='chatIcon' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat