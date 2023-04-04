import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import './sidebar.css'
import NightsStayIcon from '@mui/icons-material/NightsStay';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { SearchRounded } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import SidebarChat from '../sidebarChat/SidebarChat';
import Dp from '../DP/Dp';

function Sidebar() {
    return (
        <>
            <div className='sidebar'>
                <div className="sidebarHeader">
                    <h3>Chats</h3>
                    <div className='sectionHeaderRight'>
                        <AddRoundedIcon fontSize='medium' className='plusIcon' />
                        <NightsStayIcon fontSize='medium' className='themeIcon' />
                    </div>
                </div>
                <div className="sidebarSearch">
                    <div className='siderbarSearchContainer'>
                        <input type="text" placeholder='Search or start a new chat' className='sidebarInput' />
                        <SearchRounded fontSize='small' className='searchIcon' />
                    </div>
                </div>
                <div className="sidebarChats">
                    <SidebarChat dp='https://images.pexels.com/photos/8864285/pexels-photo-8864285.jpeg?auto=compress&cs=tinysrgb&w=1600' name='Mahi' message='I love you💖' /> 
                     <SidebarChat dp='https://images.pexels.com/photos/12807373/pexels-photo-12807373.png?auto=compress&cs=tinysrgb&w=1600' name='Kritika' message='Kab milo ge yr' />
                    <SidebarChat dp='https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1600' name='Piyush' message='Sab thik bhai!' />
                    <SidebarChat dp='https://images.pexels.com/photos/8864283/pexels-photo-8864283.jpeg?auto=compress&cs=tinysrgb&w=1600' name='Jaan' message='Kya kr rahe ho babe' />
                    <SidebarChat dp='https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=1600' name='Minakshi' message='What about tommorow?' />
                    <SidebarChat dp='https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=1600' name='Menakshi' message='Hi Saurav🙋🏻‍♀️' />
                    <SidebarChat dp='https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1600' name='JackLine' message='Hello Dude' />
                </div>
            </div>
        </>
    )
}

export default Sidebar