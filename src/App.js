import './App.css';
import Header from './components/Pages/Home/Header/Header';
import Home from './components/Pages/Home/Home/Home';
import About from './components/Pages/Home/About/About';
import ReachUs from './components/Pages/Home/ReachUs/ReachUs';
import Login from './components/Pages/Login/Login/Login';
import NotFound from './components/Pages/NotFound/NotFound';
import Footer from './components/Pages/Home/Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Details from './components/Pages/Details/Details';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import OurDoctors from './components/Pages/Home/OurDoctors/OurDoctors';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/details/:serviceId">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute exact path="/doctors">
            <OurDoctors></OurDoctors>
          </PrivateRoute>
          <PrivateRoute exact path="/about">
            <About></About>
          </PrivateRoute>
          <Route exact path="/reachus">
            <ReachUs></ReachUs>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
           <SignUp></SignUp>
          </Route>
          <Route exact path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
