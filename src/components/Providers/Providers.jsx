'use client';

import { HoursModalProvider } from '@/context/HoursModalContext';

export default function Providers({ children }) {
  return <HoursModalProvider>{children}</HoursModalProvider>;
}
