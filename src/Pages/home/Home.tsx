import React from 'react'
import NavButton from '../../components/navbutton/NavButton'
function Home(){

return(
   
    <React.Fragment>
<main className='min-h-screen'>
    <div>
        <h1>I am home page</h1>
    </div>
    <div>
    <NavButton label="Go to Login" to="/login" />
    <NavButton label="Go to Register" to="/register" />
    </div>
</main></React.Fragment>
)
}

export default Home