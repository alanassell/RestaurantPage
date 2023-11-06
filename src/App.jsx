import './App.css'
import Home from './pages/home/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './pages/menu/menu';
import { MenuProvider } from './context/menu';

function App() {

  return (
    <>
      <div className='img'></div>
      <div className='fondoBlack'></div>
      <MenuProvider>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/menu' element={<Menu/>} />
        </Routes>
      </MenuProvider>
    </>
  )
}

export default App
