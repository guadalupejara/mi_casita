import React from 'react';

const darkTransparentCard = React.memo(({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-black/60 bg-opacity-60 rounded-3xl shadow-2xl backdrop-blur-md p-8 overflow-hidden">
      {children}
    </div>
  );
});

export default darkTransparentCard;