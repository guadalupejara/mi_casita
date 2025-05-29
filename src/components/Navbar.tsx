import React from 'react'
import {Link} from 'react-router';

function Navbar(){

    return(
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', padding: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    )
}

export default Navbar