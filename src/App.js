import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Equipment from './components/Equipment'

function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
      <Route exact path ="/" component={Body}/>
        <Route path="/equipment">
         <Equipment/>
        </Route>
      </Switch>  
    </Router>
   
  );
}

export default App;

// <Body/> component to exact path route