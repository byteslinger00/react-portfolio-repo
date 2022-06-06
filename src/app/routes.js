import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"; 

import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Login } from "../pages/login";
import { Skills } from "../pages/skills"
import { Past } from "../pages/past";
import { Experience } from "../pages/experience";
import { Register } from "../pages/register"

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Switch location={location}>
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/past" component={Past} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/experience" component={Experience} />
        <Route path="*" component={Home} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  const history = useHistory();
  const userInfo = useSelector(state => state.auth);

  if (!userInfo.loginStatus) {
    history.push("/login")
  }

  return (
    <div className="s_c">
      <AnimatedSwitch />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
