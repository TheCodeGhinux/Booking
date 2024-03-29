import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import axios from 'axios';
import Login from './pages/login/Login';

function App() {
  axios.defaults.baseURL = `http://localhost:5000`;
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/hotels' element={<List />}></Route>
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
