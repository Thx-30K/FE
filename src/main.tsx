import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/global.scss';
import App from './App.tsx';
import 'react-loading-skeleton/dist/skeleton.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1, // API 실패 시 1번만 재시도
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
