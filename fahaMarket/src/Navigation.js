import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import { useSelector } from 'react-redux';
import {LoginPage, MainPage} from './pages/index';

export default function Navigation() {
  const {user} = useSelector(state => state.app)
  return (
    <Router>
      <Scene key="root">
        <Scene key="loginPage" hideNavBar component={LoginPage} initial />
        <Scene key="mainPage" hideNavBar component={ user !== null ? MainPage : LoginPage} />
      </Scene>
    </Router>
  );
}