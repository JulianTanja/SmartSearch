import './App.css';
import SearchInput from './component/SearchInput';
import Navbar from './component/Navbar';
import {Routes, Route, Link} from "react-router-dom";
import Result from './pages/Result';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div id='page-body'></div>
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
