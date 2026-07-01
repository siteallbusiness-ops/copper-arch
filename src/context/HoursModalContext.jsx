'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import HoursModal from '@/components/Common/HoursModal/HoursModal';

const HoursModalContext = createContext(null);

export function HoursModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openHoursModal = useCallback(() => setIsOpen(true), []);
  const closeHoursModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openHoursModal, closeHoursModal }),
    [isOpen, openHoursModal, closeHoursModal]
  );

  return (
    <HoursModalContext.Provider value={value}>
      {children}
      <HoursModal isOpen={isOpen} onClose={closeHoursModal} />
    </HoursModalContext.Provider>
  );
}

export function useHoursModal() {
  const context = useContext(HoursModalContext);
  if (!context) {
    return {
      isOpen: false,
      openHoursModal: () => {},
      closeHoursModal: () => {},
    };
  }
  return context;
}
