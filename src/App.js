import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Country from './components/Country';
import CardDestination from './components/CardDestination';
import firebase from './Firebase';
import './App.css';

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'null'
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('home-images')
      .doc('A5I8ZToKdTn9cOSd3U28')
      .get()
      .then(doc => {
        if (doc.exists) {
          const data = doc.data();
          this.setState({ data });
        }
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <CardDestination data={data} />
      </div>
    );
  }
}

const Home = () => <h2>Home</h2>;

const Header = () => <div>RAFA TRAVEL BLOG </div>;
const App = () => (
  <Router>
    <div>
      <Header />
      <Countries />
      <Route exact path="/" component={Home} />
      <Route path="/(america|asia|africa|europa)/" component={Country} />
    </div>
  </Router>
);

export default App;
