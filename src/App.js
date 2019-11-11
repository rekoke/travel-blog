import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ButtonAppBar from './components/AppBar';
import LandingContainer from './templates/landing/container';
import './App.css';

const Home = () => (
  <div className="home">
    <div className="home__title">Welcome the home of the travel blog</div>
  </div>
);

const Header = () => (
  <div>
    <ButtonAppBar />
  </div>
);
const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/(america|asia|africa|europa)/" />
      <Route
        path="/(america|asia|africa|europa)/landing"
        component={LandingContainer}
      />
    </div>
  </Router>
);

export default App;
