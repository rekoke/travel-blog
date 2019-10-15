import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Country from './components/Country';
import ButtonAppBar from './components/AppBar';
import MyDropdown from './components/MyDropdown';
import './App.css';

// class Countries extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: 'null'
//     };
//   }

//   render() {
//     const { data } = this.state;
//     return (
//       <div>
//         <span>
//           <Link to="/">Home</Link>
//         </span>
//         <CardDestination data={data} />
//         <Button variant="contained" color="primary">
//           Hello World
//         </Button>
//       </div>
//     );
//   }
// }

const Home = () => (
  <div className="home">
    <div className="home__title">THIsis the home of the traveL blog</div>
    <div className="home__dropdown-container">
      <MyDropdown continent="AFRICA" />
      <MyDropdown continent="EUROPA" />
      <MyDropdown continent="ASIA" />
      <MyDropdown continent="AMERICA" />
    </div>
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
      <Route path="/(america|asia|africa|europa)/" component={Country} />
    </div>
  </Router>
);

export default App;
