import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Contact } from './components/Contact';
import { Portofolio } from './components/Portofolio';
import { NoMatch } from './NoMatch';
import { NavigationBar } from './NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/contact" component={Contact} />
              <Route path="/portofolio" component={Portofolio} />
              <Route component={NoMatch} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
