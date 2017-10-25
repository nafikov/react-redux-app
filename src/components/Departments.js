import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
  width: 200px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #5F9EA0;
  border-bottom: 1px solid #fff
`;

const Wrapper = styled.div`
  width: 200px;
  background-color: lightblue;
`;

export default class Departments extends Component {
  render() {
    return (
      <Wrapper>
        <table>
          <tbody>
            <tr>
              <td>Name1</td>
              <td>Number1</td>
              <td>Director1</td>
            </tr>
          </tbody>
        </table>

      </Wrapper>

    )
  }
}
