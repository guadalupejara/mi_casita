import React from 'react';
import { useNavigate } from 'react-router';

interface NavButtonProps {
  label: string;
  to: string;
  className?: string; // Optional for custom styling
}

const NavButton: React.FC<NavButtonProps> = ({ label, to, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors duration-200 ${className}`}
    >
      {label}
    </button>
  );
};

export default NavButton;
