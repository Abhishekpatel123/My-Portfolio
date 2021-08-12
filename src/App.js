import { Redirect, Route, Switch } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/admin" component={Admin} />

      {/* <Route path="/" >
        <Redirect to="/v1" />
      </Route> */}
    </Switch>
  );
}

export default App;