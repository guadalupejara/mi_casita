import React from "react";
import { feature } from '../../Data/featureData'

function featureCard({features}:{features:feature}){
//image , title, description
    return(
        <React.Fragment>
             <div className="border rounded-lg p-4 mb-4 shadow-md max-w-md ">
      <img src={features.url} alt={features.name} className="w-full h-48 object-cover rounded mb-2" />
      <h2 className="text-xl font-bold">{features.name}</h2>
      <p>{features.description}</p>
    </div>
        </React.Fragment>
    )
}

export default featureCard