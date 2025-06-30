import React from 'react'
import NavButton from '../components/navbutton/NavButton'
import { features } from '../Data/featureData'
import FeatureCard from '../components/home/featureCard'

function Home(){
console.log("You made it home")

return(
   
    <React.Fragment>
<main className='min-h-screen m-4'>
    <div
  id="banner"
  className="bg-cover bg-center px-4 py-8 sm:py-10 md:py-12 lg:py-16 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center text-center text-white"
  style={{ backgroundImage: `url(/casita.jpg)` }}
>
  <div className="bg-orange-900 opacity-85 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 max-w-3xl w-full rounded-lg">
    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
      Welcome To Your Casita
    </h1>
    <p className="text-sm sm:text-base md:text-lg mb-2">
      This app was created to help manage the ins and outs of your casita. Consider this site
      as an assistant to keep your safe space as productive as possible.
    </p>
    <p className="text-sm sm:text-base md:text-lg mb-6">
      Thank you for letting us into your home.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
      <NavButton className="w-full sm:w-auto" label="Go to Login" to="/login" />
      <NavButton className="w-full sm:w-auto" label="Go to Register" to="/register" />
    </div>
  </div>
</div>
<div id="features" className="px-4 py-10">
  <div className="mb-6 text-center">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Features</h1>
    <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
      Here’s what your casita assistant can help you manage.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {features.map((feature, index) => (
      <FeatureCard key={index} features={feature} />
    ))}
  </div>
</div>

</main></React.Fragment>
)
}

export default Home