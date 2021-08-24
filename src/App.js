import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
// import WishlistContainer from './components/WishlistContainer';
import FrontPageContainer from './components/FrontPageContainer';
import Body from './components/Body';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/wishes">
          {/* <WishlistContainer /> */}
        </Route>
        <Route path="/">
          <FrontPageContainer />
        </Route>
      </Switch>
      <Body/>
    </Router>
   
  );
}

export default App;