
import './App.scss';
import {Navbar} from './containers'
import {BrowserRouter as Router} from 'react-router-dom'
import Routers from './Routers';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routers />
      </Router>
     
    </>
  );
}

export default App;
