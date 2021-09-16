import React from 'react'
import {HashRouter,Redirect,Route,Switch} from 'react-router-dom'
import Login from '../views/login/Login'
import Test from '../views/test/Test'

export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/test' component={Test}></Route>
        <Route path='/' render={()=>
          localStorage.getItem("token")?
          <Test></Test>:
          <Redirect to="/login"></Redirect>
        }>
        </Route>
      </Switch>
    </HashRouter>

  )
}
