import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import RickMortyApp from './RickMortyApp';
import { PagerProvider } from './context/pager-context';
import { GlobalStyle } from './GlobalStyle';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
      retry: 1,
      keepPreviousData: true
    },
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PagerProvider>
      <QueryClientProvider client={queryClient} >
        <ReactQueryDevtools />
        <GlobalStyle />
        <RickMortyApp />
      </QueryClientProvider>
    </PagerProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
