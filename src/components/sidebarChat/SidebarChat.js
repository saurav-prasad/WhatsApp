import { Avatar } from '@mui/material'
import React from 'react'
import './sidebarchat.css'
import { useCartState } from '../../context/cartState';
import { useCartState1 } from '../../context copy/cartState';

function SidebarChat(props) {
    const [{ cardDisplay }, dispatch] = useCartState()
    const [{ }, dispatch1] = useCartState1()

    const sidebarChatAvatar = () => {
        console.log("object", cardDisplay);
        dispatch({
            type: "SET_CARD",
            dpImg: props.dp,
            dpName: props.roomName,
        })
    }
    const setChat = () => {
       
        if (window.screen.width <= 600) {
            document.getElementById('sidebar').style.display = 'none'
            document.getElementById('side').style.display = 'none'
            document.getElementById('chat').style.display = 'flex'
        }

        dispatch1({
            type: "SET_CHAT",
            chatImg: props.dp,
            chatName: props.roomName,
        })
    }

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