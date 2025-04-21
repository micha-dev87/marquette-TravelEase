import React, { ReactNode } from 'react';

interface StickyReservationButtonProps {
  onClick: () => void;
  children?: ReactNode;
}

const StickyReservationButton: React.FC<StickyReservationButtonProps> = ({ 
  onClick, 
  children = 'Réserver maintenant'
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <button
          onClick={onClick}
          className="w-full bg-sun-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default StickyReservationButton; 