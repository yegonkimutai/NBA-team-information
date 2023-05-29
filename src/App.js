import './App.css';
import Teams from './components/Teams';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import Details from './components/Information';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Teams />}/>
        <Route path='details/:id' element={<Details />}/>
      </Routes>
    </div>
  );
}

export default App;
