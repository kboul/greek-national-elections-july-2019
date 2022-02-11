import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Provider } from './context';
import Map from './features/Map';
import ResultTable from './features/ResultTable';

export default function App() {
    return (
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
    );
}
