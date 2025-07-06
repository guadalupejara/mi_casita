import Link from 'next/link';
import React from 'react';

interface NavButtonProps {
  label: string;
  to: string;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ label, to, className }) => {
  return (
    <Link href={to}>
      <button
        className={`px-4 py-2 bg-zinc-950 text-white rounded hover:bg-zinc-500 transition-colors duration-200 ${className}`}
      >
        {label}
      </button>
    </Link>
  );
};

export default NavButton;
