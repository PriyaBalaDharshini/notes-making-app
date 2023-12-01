import './App.css';
import NavigationBar from './Components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Notes from './Pages/Notes';
import Tasks from './Pages/Tasks';
import Archive from './Pages/Archive';
import Bin from './Pages/Bin';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <NavigationBar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path='/' Component={Home} />
              <Route path='/Search' Component={Search} />
              <Route path='/Notes' Component={Notes} />
              <Route path='/Tasks' Component={Tasks} />
              <Route path='/Archive' Component={Archive} />
              <Route path='/Bin' Component={Bin} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
