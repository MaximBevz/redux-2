import './App.css';
import Posts from './components/posts/posts';
import Comments from './components/comments/comments';
import Home from './components/home/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div><Link to={'/'}>Home page</Link></div>
        <div><Link to={'/posts'}>Posts page</Link></div>
        <div><Link to={'/comments'}>Comments page</Link></div>

        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/posts'} render={() => <Posts/>}/>
          <Route path={'/comments'} render={() => <Comments/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
