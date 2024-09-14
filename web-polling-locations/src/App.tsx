import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PollingLocations from './pages/PollingLocations';

function App() {
  return (
<Router>
      <Routes>
        <Route path="*" element={<PollingLocations />} />
      </Routes>
    </Router>
  );
}

export default App;
