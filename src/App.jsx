import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Provider } from './context';
import Map from './features/Map';
import ResultTable from './features/ResultTable';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
});

export default function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Provider>
          <BrowserRouter>
            <Routes>
              <Route path="parties" element={<ResultTable />}>
                <Route path=":id" element={<ResultTable />} />
              </Route>
              <Route path="/" element={<Map />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0px;
  }
`;
