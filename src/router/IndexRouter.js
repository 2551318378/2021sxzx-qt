import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Login from '../views/LoginPage/Login.js'
import GuideResult from '../views/GuideResult/GuideResult'

export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/guideResult' component={GuideResult}></Route>
        <Route path='/' component={GuideResult}></Route>
      </Switch>
    </HashRouter>

  )
}
