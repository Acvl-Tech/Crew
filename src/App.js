import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Dashboard/Dashboard';
import Header from './Components/Bookings/header';
import Sidebar12 from './Components/Bookings/sidebar';
import App12 from './Components/Bookings/maindash';


function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/app' element={<App12/>}/>
    <Route path='/final' element={<App12/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
