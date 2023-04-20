import React from 'react'
import TagIcon from '@mui/icons-material/Tag';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TwitterIcon from '@mui/icons-material/Twitter';

const Sidebar = () => {
    const data = [{id:1,icon:<HomeIcon/>,title:'Home'},
    {id:2,icon:<TagIcon/>,title:'Explore'},
    {id:3,icon:<NotificationsIcon/>,title:'Notifications'},
    {id:4,icon:<LocalPostOfficeIcon/>,title:'Messages'},
    {id:5,icon:<SettingsIcon/>,title:'Settings'},
    {id:6,icon:<MoreHorizIcon/>,title:'More'}
]
  return (
    <div className='sidebar'>
        <TwitterIcon style={{color:'#1da1f2'}}/>
        
            {data.map((datas)=>{
                return(
                    <div key={datas.id} className='sidebar-details'>
                        {datas.icon}
                        <h3 className='sidebar-title'>{datas.title}</h3>
                    </div>
                )
            })}
        
    </div>
  )
}

export default Sidebar
