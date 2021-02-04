import Home from "./Home"
import Top from "./Top"
import Below from "./Below"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">      
      <Top/>
      <Home/>
      <Switch>
        <Route path="/">
          <Below/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
