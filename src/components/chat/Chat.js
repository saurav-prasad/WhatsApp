import React, { useState } from 'react'
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
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function Chat() {
    const [input, setInput] = useState("")
    const [{ chatImg, chatName }, dispatch] = useCartState1()
    const [{ }, dispatch1] = useCartState()
    const sidebarChatAvatar = () => {
        dispatch1({
            type: "SET_CARD",
            dpImg: chatImg,
            dpName: chatName,
        })
    }

    document.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            setInput('')
        }
    })
    const setSendBtn = () => {
        setInput('')
    }
    const hideChat = ()=>{
        document.getElementById('sidebar').style.display = 'flex'
        document.getElementById('side').style.display = 'flex'
        document.getElementById('chat').style.display = 'none'
    }
    return (
        <>
            <div className='chat' id='chat'>
                <div className="chatContainer">
                    {/* Chat header */}
                    <div className="chatHeader">
                        <ArrowBackRoundedIcon onClick={hideChat} className='leftarrowIcon' />
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
                {/* Main chat section */}
                <div className='chatTextContainer'></div>
                <div className="chatArea">
                    {/* Chat message appears here */}
                    <p className='chatMessage chatReceiver' >
                        Hello world!
                        <span className='chatSenderName'>Saurav Prasad</span>
                        <span className='chatTime'>11:25</span>
                    </p>
                </div>
                {/* Bottom chat section */}
                <div className="c sidebarSearch">
                    <div className='siderbarSearchContainer chatContainerBox'>
                        <SentimentSatisfiedAltRoundedIcon sx={{ width: 23, height: 23 }} className='chatIcon' />
                        <AttachFileRoundedIcon sx={{ width: 23, height: 23 }} className='chatIcon' />
                        {/* input bar */}
                        <input value={input} onChange={(e) => { setSendBtn(); setInput(e.target.value) }} type="text" placeholder='Type a message' className='chatInput' />

                        <MicRoundedIcon  style={input.length <1 ?{display:"block"}:{display:'none'}} sx={{ width: 23, height: 23 }} className='chatIcon' />
                        <SendRoundedIcon onClick={setSendBtn} style={input.length <1 ?{display:"none"}:{display:'block'}} sx={{ width: 23, height: 23 }} className='chatIcon' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat