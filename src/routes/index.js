import { Switch, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import WelcomePage from "../pages/WelcomePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SignUp/>
      </Route>
      <Route path="/welcomepage">
        <WelcomePage />
      </Route>
    </Switch>
  );
};

export default Routes;