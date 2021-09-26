import React from 'react'
import {HashRouter,Redirect,Route,Switch} from 'react-router-dom'
import Login from '../views/login/Login'
import CommentPage from '../views/comment-page/CommentPage'
import RatePage from '../views/rate-page/RatePage.js'

export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/commentPage' component={CommentPage}></Route>
        <Route path='/ratePage' component={RatePage}></Route>
        <Route path='/' render={()=>
          localStorage.getItem("token")?
          <CommentPage></CommentPage>:
          <Redirect to="/login"></Redirect>
        }>
        </Route>
      </Switch>
    </HashRouter>

  )
}
