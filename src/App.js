import { Redirect, Route, Switch } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      {/* <Route path="/" >
        <Redirect to="/v1" />
      </Route> */}
    </Switch>
  );
}

export default App;