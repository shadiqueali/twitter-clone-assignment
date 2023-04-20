import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='error-page'>
        <h1>404</h1>
        <h3>Sorry,the page tried cannot be found</h3>
        <Link to='/' className='error-btn'> back home</Link>
    </div>
  )
}

export default ErrorPage