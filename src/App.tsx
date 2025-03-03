import Intro from '@pages/Intro';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </Router>
  );
}

export default App;
