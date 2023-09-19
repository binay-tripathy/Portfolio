import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <>
      <Routes>
        <Route path='/Portfolio/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/Portfolio/about' element={<About/>} />
          <Route path='/Portfolio/contact' element={<Contact/>} />
          <Route path='/Portfolio/projects' element={<Projects/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
