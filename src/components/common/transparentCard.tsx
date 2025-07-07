import React from 'react';

const transparentCard = React.memo(({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 opacity-65">
      {children}
    </div>
  );
});

export default transparentCard;
