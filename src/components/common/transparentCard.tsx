import React from 'react';

const transparentCard = React.memo(({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white/65 rounded-2xl shadow-lg p-6">
      {children}
    </div>
  );
});

export default transparentCard;
