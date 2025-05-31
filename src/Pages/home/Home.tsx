import React from 'react'
import NavButton from '../../components/navbutton/NavButton'
import { person } from '../../Data/data'
import casita from '../../../public/casita.jpg'

function Home({people}:{people:person[]}){
console.log("You made it home")

return(
   
    <React.Fragment>
<main className='min-h-screen m-4'>
    <div
     className="bg-cover bg-center p-10 h-96 flex flex-col items-center justify-center text-center text-white"
     style={{ backgroundImage: `url(/casita.jpg)` }}
    >
        <div className='bg-orange-900 bg-opacity-75 p-10'>
        <h1 className='text-3xl mb-3'><strong>Welcome To Your Casita {people[1].firstName}</strong></h1>
        <p className='text-xl mb-1'> This app was created to help manage the ins and outs of your casita. Consider this site
            as an assistant to keep your safe space as productive as possible.
        </p>
        <p className='text-xl mb-3'>
        Thank you for letting us into your home.
        </p>
   
    <div>
    <NavButton className='m-1' label="Go to Login" to="/login" />
    <NavButton className='m-1' label="Go to Register" to="/register" />
    </div> 
    </div>
    </div>
</main></React.Fragment>
)
}

export default Home