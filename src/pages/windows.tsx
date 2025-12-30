"use client";
import dynamic from "next/dynamic";

const DrawerShell = dynamic(
  () => import("../components/drawer/drawerShell"),
  { ssr: false }
);

export default function Windows() {
  return (
    <>
      <DrawerShell />
    </>
  );
}
