import React from 'react';
import Container from '../../container/Container';
import { 
  BrowserRouter as Router,
  Route,
  Switch, 
} from 'react-router-dom';
import CharacterDetail from '../../container/CharacterDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Container}/>
        <Route exact path="/detail/:id" component={CharacterDetail}/>
      </Switch>
    </Router>
  );
}
