import React from 'react'
import { HashRouter as Router, Route,Redirect,Switch} from "react-router-dom";
import HomePage from './Components/HomePage'
import Quizz from './Components/Quizz'
import Result from './Components/Result'
const AppRouter=()=>{
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path={`/quizz/:id`} exact component={Quizz} />
          <Route path={`/result/:id`} exact component={Result} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
  
  export default AppRouter;