
import './App.css';
import Assign from './components/Assign';
import Main from './components/Main';
import Navbar from './components/Navbar';
import User from './components/User';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Adminstate from './context/Adminstate';
import Sheets from './components/Sheets';

function App() {
  return (
    <>
    <Adminstate>

      <Router>

        <Navbar />
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/create' element={<User />}></Route>
          <Route exact path='/assign' element={<Assign />}></Route>
          <Route exact path='/sheets' element={<Sheets/>}></Route>
        </Routes>
      </Router>
    </Adminstate>
    </>
  );
}

export default App;
