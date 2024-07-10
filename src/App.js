import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MoreInformation } from './pages/MoreInformation';
import { Projects } from './pages/Projects';

function App() {
  return (
      <Router>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/projects' element = {<Projects/>}/>
          <Route path = '/more_information' element = {<MoreInformation/>}/>
        </Routes>
      </Router>
  );
}

export default App;
