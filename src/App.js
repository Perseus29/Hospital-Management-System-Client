import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing";
import Doctor from './pages/Doctor';
import Patient from './pages/Patient';
import Admin from './pages/Admin';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/patient" element={<Patient />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
