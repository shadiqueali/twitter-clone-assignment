import React from 'react'
import AllTweet from '../components/AllTweet'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'

const HomePage = () => {
 
  return (
    <div className='home'>
      
      <Sidebar/>
      <AllTweet/>
      <Rightbar/>
    </div>
  )
}

export default HomePage