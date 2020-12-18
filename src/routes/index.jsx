import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Switch } from "react-router";
import Login from "../components/Login";
import Homepage from "../layout/Homepage";
import Courses from "../layout/Courses";
import ListCourse from "../layout/ListCourses";
import DetailCourses from "../layout/DetailCourses";
import Blog from "../layout/Blog";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/homepage" exact component={Homepage} />
      <Route path="/listcourse" exact component={ListCourse} />
      <Route path="/courses" exact component={Courses} />
      <Route path="/detailcourse" exact component={DetailCourses} />
      <Route path="/blog" exact component={Blog} />
      <Redirect from="/" to="/" />
    </Switch>
  );
};

export default Router;
