'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import {Plus} from 'lucide-react';

function topNavBar (){
const router = useRouter();

 const handleAdd = () =>{
    console.log("Adding new room..")
 router.push('/windows');
 }   
return(
    <>
    <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-zinc-900/60 rounded-full p-3 flex flex-row items-center gap-6 shadow-lg">
      {/* Add Icon */}
      <div className="group relative">
        <button
          onClick={handleAdd}
          className="text-white hover:text-zinc-400 transition-colors"
        >
        <Plus size={24} />
        </button>
        <span className="absolute -right-28 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs px-2 py-1 rounded shadow">
        Add
        </span>
      </div>
    </div>
    </>
)
}
export default topNavBar