import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Provider } from './context';
import Map from './features/Map';
import ResultTable from './features/ResultTable';

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Provider>
                <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
                    <Routes>
                        <Route path="parties" element={<ResultTable />}>
                            <Route path=":id" element={<ResultTable />} />
                        </Route>
                        <Route path="/" element={<Map />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0px;
  }
`;
