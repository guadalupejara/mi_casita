"use client";

import { useState } from "react";
import { Drawer, Button } from "flowbite-react";
import {PanelRightOpen, PanelRightClose } from 'lucide-react';

function DrawerShell() {
  const [open, setOpen] = useState(true);

  return (
    <>
  <div className="group fixed right-4 top-4 bg-zinc-900/60 rounded-full p-3 flex flex-col items-center gap-6 shadow-lg">
  <Button
    className="text-white hover:text-zinc-400 transition-colors"
    onClick={() => setOpen((prev) => !prev)}
  >
    {open ? <PanelRightClose size={24} /> : <PanelRightOpen size={24} />}
  </Button>

  {/* Tooltip */}
  <span className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2
                   scale-0 group-hover:scale-100 transition-transform
                   bg-black text-white text-xs px-2 py-1 rounded shadow">
    Settings
  </span>
</div>

 {open && (
  <Drawer
    open={open}
    onClose={() => setOpen(false)}
    position="right"
    backdrop={false}
    className="w-80 bg-zinc-900/60 border-l shadow-lg top-30"
  >
    <div className="p-4 text-white">
      <h2 className="text-xl font-semibold mb-4">Drawer Content</h2>
      <p>This drawer has no backdrop and fully unmounts when closed.</p>
    </div>
  </Drawer>
)}
     
    </>
  );
}

export default DrawerShell