import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
  width: 200px;
  display: inline-block;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #5F9EA0;
  border-bottom: 1px solid #fff
`;

const Wrapper = styled.div`
  display: inline-block;
  width: 200px;
  background-color: #fff;
`;

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <NavLink to='/departments'>Departments</NavLink>
        <NavLink to='/employees'>Employees</NavLink>


      </Wrapper>

    )
  }
}
