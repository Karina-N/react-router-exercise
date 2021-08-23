import React from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectList from "./ProjectList";
import { Switch, Route } from "react-router-dom";
import queryString from "query-string";

import projectsArr from "../data/projects.json";

function Main() {
  return (
    <Switch>
      <Route path="/" exact>
        display homepage
      </Route>

      {/* <Route path="/projects" exact>
        <ProjectList projectsArr={projectsArr} />
      </Route> */}

      <Route
        path="/projects"
        exact
        render={(routeProps) => {
          const query = queryString.parse(routeProps.location.search);

          return <ProjectList projectsArr={projectsArr} filterBy={query.technology} />;
        }}
      />

      {/* ALTERNATIVE SYNTAX */}
      {/* <Route path="/projects/:id" component={ProjectDetails} /> */}
      <Route
        path="/projects/:id"
        render={(routeProps) => {
          const projectRequested = projectsArr.find((project) => project.id === parseInt(routeProps.match.params.id));

          return <ProjectDetails {...projectRequested} />;
        }}
      />

      <Route path="/about">display about page</Route>
      <Route path="/blog">display blog</Route>
    </Switch>
  );
}

export default Main;
