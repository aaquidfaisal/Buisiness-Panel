import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div id="dashboard">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        
        



      </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
