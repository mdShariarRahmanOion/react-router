import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./components/team/Main/Main";
import TeamDetails from "./components/team/TeamDetails/TeamDetails";
import NoMatch from "./NoMatch/NoMatch";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Main></Main>
        </Route>
        <Route path="/team/:idTeam">
            <TeamDetails/>
          </Route>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
