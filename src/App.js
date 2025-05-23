import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar'
import Home from './Components/Home';
import Create from './Components/Create';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path="/">
            <Home/>
            </Route>

            <Route path="/create">
            <Create/>
            </Route>

            {/* <Route path="/Blog-details/:id">
            <BlogDetails/>
            </Route> */}

            <Route path="*">
              <NotFound/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;