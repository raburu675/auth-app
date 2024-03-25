import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link className='mx-6' to='signup'>signup</Link>
        <Link to='login'>login</Link>
    </div>
  )
}

export default Nav