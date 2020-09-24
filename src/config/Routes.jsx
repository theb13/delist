import React from 'react'
import {Switch, Route,Redirect} from 'react-router'
import Add from '../components/Add'
import List from '../components/List'
import SingleView from '../components/SingleView'


export default props=>
<Switch>
    <Route exact path='/' component={List}/>
    <Route exact path='/add' component={Add}/>
    <Route exact path='/view' component={SingleView}/>
    <Redirect from='*' to='/' />
</Switch>