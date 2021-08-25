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
import Equipment from './components/Equipment'

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
        <Route path="/equipment">
          <Equipment/>
        </Route>
      </Switch>
      <Body/>
    </Router>
   
  );
}

export default App;