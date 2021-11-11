import React from 'react'
import {HashRouter,Redirect,Route,Switch} from 'react-router-dom'
import Login from '../views/LoginPage/Login.js'
import CommentPage from '../views/CommentPage/CommentPage.js'
import RatePage from '../views/RatePage/RatePage.js'

export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/commentPage' component={CommentPage}></Route>
        <Route path='/ratePage' component={RatePage}></Route>
        <Route path='/' component={CommentPage}>
        </Route>
      </Switch>
    </HashRouter>

  )
}
