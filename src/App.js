import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './components/Contacto/Contacto';
import Login from './components/Login/Login';
import Inicio from './components/Inicio/Inicio';
import Productos from './components/Productos/Productos';
import Register from './components/Register/Register';

function App() {
  return (
      <Routes>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
  );
}

export default App;
