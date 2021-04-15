import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointments from './Components/Appointments/Appointment/Appointments';


function App() {
  return (
    <div>
      <Router>
          <Switch>
              <Route path="/appointment">
                <Appointments></Appointments>
              </Route>
              <Route path="/">
                <Home></Home>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
