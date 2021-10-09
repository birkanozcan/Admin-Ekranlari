import React, { Component } from 'react'
import Header from '../components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../containers/Home'
import Roles from '../containers/Roles'
import UserList from './UserList';
import Firms from './Firms';
import FirmsAdd from './FirmsAdd';
import UserListEditPage from './UserListEditPage';
import RolesEdit from './RolesEdit';
import Groups from './Groups';
import GroupsAdd from './GroupsAdd';
import GroupsEdit from './GroupsEdit';
import FirmsEdit from './FirmsEdit';


export default class App extends Component {
  render() {
    return (
      <Header>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/roles">
              <Roles />
            </Route>
            <Route exact path="/roles-edit/:roleId">
              <RolesEdit />
            </Route>
            <Route exact path="/user-list">
              <UserList />
            </Route>
            <Route exact path="/firms">
              <Firms />
            </Route>
            <Route exact path="/FirmsEdit">
              <FirmsEdit />
            </Route>
            <Route exact path="/firms-add/:firmId">
              <FirmsAdd />
            </Route>
            <Route exact path="/users-edit/:userId">
              <UserListEditPage />
            </Route>
            <Route exact path="/groups">
              <Groups />
            </Route>
            <Route exact path="/groups-add/:groupsId">
              <GroupsAdd />
            </Route>
            <Route exact path="/GroupsEdit">
              <GroupsEdit />
            </Route>
          </Switch>
        </div>
      </Header>
    )
  }
}
