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
            dpName: props.name,
        })
    }
    const navigate = useNavigate();
    const setChat = () => {
        if(window.screen.width >= 600){
            navigate('/')
        }
        else{
            navigate('/mobile-messages')

        }
        dispatch1({
            type: "SET_CHAT",
            chatImg: props.dp,
            chatName: props.name,
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
                        <h4>{props.name}</h4>
                        <p>{props.message}</p>
                    </div>
            </div>
            <hr aria-hidden="true" class="a-spacing-small a-divider-normal" />
        </>
    )
}

export default SidebarChat