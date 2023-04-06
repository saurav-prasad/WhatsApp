import { Avatar } from '@mui/material'
import React from 'react'
import './sidebarchat.css'
import { useCartState } from '../../context/cartState';
import { useCartState1 } from '../../context copy/cartState';
import { useNavigate } from 'react-router-dom';

function SidebarChat(props) {
    const [{ cardDisplay }, dispatch] = useCartState()
    const [{ chatImg, chatName }, dispatch1] = useCartState1()

    const sidebarChatAvatar = () => {
        console.log("object", cardDisplay);
        dispatch({
            type: "SET_CARD",
            dpImg: props.dp,
            dpName: props.roomName,
        })
    }
    const navigate = useNavigate();
    const setChat = () => {
        dispatch1({
            type: "SET_CHAT",
            chatImg: props.dp,
            chatName: props.roomName,
        })
    }
    // console.log("props",props.roomName);
    return (
        <>
            <div className='sidebarchat'>
                <span onClick={sidebarChatAvatar} className='sidechatSpan'>
                    <Avatar
                        alt="Remy Sharp"
                        src={props.dp}
                        sx={{ width: 47, height: 47 }}
                    />
                </span>
                
                    <div className="sidechatInfo" onClick={setChat} >
                        <h4>{props.roomName}</h4>
                        <p>{props.message}</p>
                    </div>
            </div>
            <hr aria-hidden="true" className="a-spacing-small a-divider-normal" />
        </>
    )
}

export default SidebarChat