'use client'; // Mark this component as client-side

import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/utils/queryClient';

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}