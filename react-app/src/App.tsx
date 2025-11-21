import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PnLDashboard } from './pages/PnLDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PnLDashboard />} />
        <Route path="/pl" element={<PnLDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
