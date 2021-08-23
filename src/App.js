import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import WishlistContainer from './components/WishlistContainer';
import FrontPageContainer from './components/FrontPageContainer';

function App() {
  return (
    <Router>

      <Navbar />

      <Switch>
    
        <Route path="/wishes">
          <WishlistContainer />
        </Route>
        <Route path="/">
          <FrontPageContainer />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;