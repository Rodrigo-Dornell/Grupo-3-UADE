import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrimarySearchAppBar from "./NavBar";
import Carro from "./Carro";

function App() {
  return (
    <Router>
      <div>
        <PrimarySearchAppBar />
        <Switch>
          <Route exact path="/carro" component={Carro} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
