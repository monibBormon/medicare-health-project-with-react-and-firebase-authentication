import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/HomePage/Home/Home';
import ServiceDetails from './pages/HomePage/ServiceDetails/ServiceDetails';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/SharedPage/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/contact'>
            <ContactUs></ContactUs>
          </Route>
          <Route path='/service/:title'>
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
