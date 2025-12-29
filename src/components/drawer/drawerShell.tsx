"use client";

import { useState } from "react";
import { Drawer, Button } from "flowbite-react";
import {PanelRightOpen, PanelRightClose } from 'lucide-react';

export default function DrawerShell() {
  const [open, setOpen] = useState(true);

  return (
    <>
    <div className="fixed bg-zinc-900/60 rounded-full p-3 flex flex-col items-center gap-6 shadow-lg">
      <Button
        className="text-black outline"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <PanelRightClose size={24} /> : <PanelRightOpen size={24} />}
      </Button> 
      </div>
      {open && (
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          position="right"
          backdrop={false}
          className="w-80 border-l shadow-lg"
        >
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Drawer Content</h2>
            <p>This drawer has no backdrop and fully unmounts when closed.</p>
          </div>
        </Drawer>
      )}
     
    </>
  );
}
