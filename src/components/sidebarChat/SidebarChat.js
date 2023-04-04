import { Avatar } from '@mui/material'
import React from 'react'
import './sidebarchat.css'
import Dp from '../DP/Dp'
import { useCartState } from '../../context/cartState';

function SidebarChat(props) {
    const [{ cardDisplay }, dispatch] = useCartState()
    const a = () => {
        console.log("object", cardDisplay);
        dispatch({
            type: "SET_CARD",
            dpImg: props.dp,
            dpName: props.name,
        })
    }

    return (
        <>
            <div className='sidebarchat'>
                <span onClick={a} className='sidechatSpan'>
                    <Avatar
                        alt="Remy Sharp"
                        src={props.dp}
                        sx={{ width: 47, height: 47 }}
                    />
                </span>

                <div className="sidechatInfo">
                    <h4>{props.name}</h4>
                    <p>{props.message}</p>
                </div>
            </div>
            <hr aria-hidden="true" class="a-spacing-small a-divider-normal" />
        </>
    )
}

export default SidebarChat