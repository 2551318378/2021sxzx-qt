import React from 'react'
import {HashRouter,Redirect,Route,Switch} from 'react-router-dom'
import Login from '../views/login/Login'
import TestComment from '../views/testComment/TestComment'
import TestRate from '../views/testRate/TestRate'

export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/testComment' component={TestComment}></Route>
        <Route path='/testRate' component={TestRate}></Route>
        <Route path='/' render={()=>
          localStorage.getItem("token")?
          <TestComment></TestComment>:
          <Redirect to="/login"></Redirect>
        }>
        </Route>
      </Switch>
    </HashRouter>

  )
}
