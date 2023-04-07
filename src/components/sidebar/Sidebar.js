import React, { useEffect, useState } from 'react'
import './sidebar.css'
import NightsStayIcon from '@mui/icons-material/NightsStay';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { SearchRounded } from '@mui/icons-material';
import SidebarChat from '../sidebarChat/SidebarChat';
import db from '../../firebase';
import { collection, addDoc, query, onSnapshot, } from "firebase/firestore";
import CreateIcon from '@mui/icons-material/Create';

function Sidebar() {
    const [data, setData] = useState([])
    const [newRoomName, setNewRoomName] = useState('')
    const [createChatDisplay, setCreateChatDisplay] = useState({ display: 'none' })
    useEffect(() => {
        const unsubscribe = ()=>{
        const q = query(collection(db, "rooms"),);
        onSnapshot(q, (querySnapshot) => {
            setData(querySnapshot.docs.map((e) => ({ roomName: e.data().roomName, id: e.id, roomDp: e.data().roomDp })));
        })
    }
    return ()=> unsubscribe()
    }, [])

    const createChat = () => {
        setCreateChatDisplay({ display: 'block' })
    }
    const newRoom = async () => {
        // * CREATE
        if(newRoomName){
        await addDoc(collection(db, "rooms"), {
            roomName: newRoomName,
        });
    }
    setNewRoomName('')
        setCreateChatDisplay({ display: 'none' })
    }

    return (
        <>
            <div className='sidebar'>
                <div className="sidebarHeader">
                    <h3>Chats</h3>
                    <div className='sectionHeaderRight'>
                        <AddRoundedIcon onClick={createChat} fontSize='medium' className='plusIcon' />
                        <NightsStayIcon fontSize='medium' className='themeIcon' />
                    </div>
                </div>
                <div className="sidebarSearch" style={createChatDisplay}>
                    <div className='siderbarSearchContainer'>
                        <input value={newRoomName} onChange={(e) => setNewRoomName(e.target.value)} type="text" placeholder='Room name' className='sidebarInput' />
                        <CreateIcon onClick={newRoom} fontSize='small' className='searchIcon' />
                    </div>
                </div>
                <div className="sidebarSearch">
                    <div className='siderbarSearchContainer'>
                        <input type="text" placeholder='Search or start a new chat' className='sidebarInput' />
                        <SearchRounded fontSize='small' className='searchIcon' />
                    </div>
                </div>
                <div className="sidebarChats">
                    {
                        data?.map((data) => <SidebarChat dp={data.roomDp} id={data.id} key={data.id} roomName={data.roomName} message='Hello Dude' />)
                    }
                </div>
            </div>
        </>
    )
}

export default Sidebar