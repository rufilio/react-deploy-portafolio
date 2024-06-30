import { Navbar } from './assets/Components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Proyectos } from './pages/Proyectos';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Proyectos' element={<Proyectos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
