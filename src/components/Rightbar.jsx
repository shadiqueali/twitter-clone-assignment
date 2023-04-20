import React from 'react'
import { useNavigate } from 'react-router-dom';

const Rightbar = () => {
    const navigate = useNavigate()
    const handleClick = () =>{
        console.log('hai');
        navigate('/mytweet')
    }
  return (
    <div className='rightbar'>
        <button className='tweets-btn' onClick={handleClick}>My Tweets</button>
    </div>
  )
}

export default Rightbar
