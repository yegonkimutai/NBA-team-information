import './App.css';
import Teams from './components/Teams';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Teams />}/>
      </Routes>
    </div>
  );
}

export default App;
