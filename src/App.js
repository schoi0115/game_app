import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
<<<<<<< HEAD

=======
>>>>>>> origin
import Equipment from './components/Equipment'

function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
<<<<<<< HEAD
      <Route exact path ="/" exact component={Body}/>
=======
      <Route exact path ="/" component={Body}/>
>>>>>>> origin
        <Route path="/equipment">
         <Equipment/>
        </Route>
      </Switch>  
<<<<<<< HEAD
=======

>>>>>>> origin
    </Router>
   
  );
}

export default App;

// <Body/> component to exact path route