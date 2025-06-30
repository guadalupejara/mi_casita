// import React from 'react'
// import {Link} from 'react-router';
// import NavButton from '../navbutton/NavButton';

// function Navbar(){

//     return(
//       <React.Fragment>
//         <div
//       style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '1rem'
//       }}
//     >
//       <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
//       <Link to="/">Mi Casita</Link>
//       </div>

//       <div style={{ display: 'flex', gap: '1rem' }}>
//         <Link to="/"   style={{
//     display: 'flex',
//     alignItems: 'center'
//   }} className="hover:text-zinc-500">Home</Link>
//         <NavButton label="Login" to="/login" />
//       </div>
//     </div>
//       </React.Fragment>
//     )
// }

// export default Navbar

'use client'; // Only needed if you're placing this in /app/ directory

import React from 'react';
import Link from 'next/link';
import NavButton from '../navbutton/NavButton';

function Navbar() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem'
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
        <Link href="/">Mi Casita</Link>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link
          href="/"
          className="hover:text-zinc-500"
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Home
        </Link>
        <NavButton label="Login" to="/login" />
      </div>
    </div>
  );
}

export default Navbar;
