import { Avatar } from '@mui/material'
import React from 'react'
import './sidebarchat.css'
import { useCartState } from '../../context/cartState';
import { Link } from 'react-router-dom';

function SidebarChat(props) {
    const [{}, dispatch] = useCartState()

    const sidebarChatAvatar = () => {
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
                <Link className='sidebarLink' to={`/room/${props.id}`}>
                    <div className="sidechatInfo" onClick={setChat} >
                        <h4>{props.roomName}</h4>
                        <p>{props.message}</p>
                    </div>
                </Link>
            </div>
            <hr aria-hidden="true" className="a-spacing-small a-divider-normal" />
        </>
    )
}

export default SidebarChat