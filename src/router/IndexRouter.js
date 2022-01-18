import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Login from '../views/LoginPage/Login.js'
import GuideResult from '../views/GuideResult/GuideResult'
import SearchPage from '../views/SearchPage/SearchPage.js'
import Home from '../views/HomePage/HomePage.js'
import Navigation from '../views/Navigation/Navigation.js'

export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/guideResult' component={GuideResult}></Route>
        <Route path='/searchPage' component={SearchPage}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/navigation' component={Navigation}></Route>
        <Route path='/' component={Navigation}></Route>
      </Switch>
    </HashRouter>

  )
}
