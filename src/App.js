import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './containers/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="">
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
