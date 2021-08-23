import React from 'react';
import { Switch, Route } from 'react-router-dom';


function Main() {

  return (
    <Switch>
      <Route path="/" exact>
        display homepage
      </Route>

      <Route path="/projects">
        <h2>This is my projects page</h2>
        <div>Project 1: ... Project 2: ...</div>
      </Route>

      <Route path="/about">
        display about page
      </Route>

      <Route path="/blog">
        display blog
      </Route>
    </Switch>
  );
}

export default Main;
