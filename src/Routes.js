import React from 'react'
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from "./Page/home/home";
import LandingPage2 from "./Page/LandingPage2/LandingPage2";
// import  Footer  from './Components/Footer/Foooter';
// import Header from './Components/header/header';
import ErrorPage from './Components/ErrorPage/ErrorPage';
// import ErrorPage from './Components/ErrorPage/ErrorPage'
const Routes = ({data,globalData})=>{

  return (
    <>
    {(data && globalData) && <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={LandingPage2}>
        </Route> 
        <Route path="*"component={ErrorPage} />
        </Switch>
    </BrowserRouter>}
    </>
  );
}

export default Routes
