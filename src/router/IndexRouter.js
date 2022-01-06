import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Login from '../views/LoginPage/Login.js'
import CommentPage from '../views/CommentPage/CommentPage.js'
import RatePage from '../views/RatePage/RatePage.js'
import GuideResult from '../views/GuideResult/GuideResult'

export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/commentPage' component={CommentPage}></Route>
        <Route path='/ratePage' component={RatePage}></Route>
        <Route path='/guideResult' component={GuideResult}></Route>
        <Route path='/' component={CommentPage}></Route>
      </Switch>
    </HashRouter>

  )
}
