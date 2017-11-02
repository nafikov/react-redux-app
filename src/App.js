import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import Departments from './components/Departments';
import Employees from './components/Employees';
import styled from 'styled-components';
import EmployeeEditor from "./components/EmployeeEditor";
import { connect } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navigation />
        <Switch>
          <Route exact path='/departments' component={Departments} />
          <Route exact path='/employees' component={Employees} />
          {/*<Route exact path='/' component={Navigation} />*/}
          {/*<Route path='/employees/:id'  render={() => (*/}
            {/*this.props.activeEmployee ? (<EmployeeEditor/>) : (<Redirect to="/"/>)*/}
          {/*)} />*/}
        </Switch>
      </Wrapper>
    );
  }
}

export default App;
