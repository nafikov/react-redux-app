import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

const NavLink = styled(Link)`
  width: 200px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #5F9EA0;
  border-bottom: 1px solid #fff
`;

const Wrapper = styled.div`
  width: 600px;
  background-color: lightblue;
`;

class Employees extends Component {
  render() {
    return (
      <Wrapper>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Number</td>
              <td>Director</td>
              <td>Редактировать</td>
            </tr>
          </thead>
          <tbody>
          {this.props.employees.map((emp, index) => {
            return (
              <tr onClick={() => this.props.selectEmployee(emp.age)} key={index}>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.salary}</td>
                <td>
                  <Link to={`/employees/${emp.age}`}>Редактировать</Link>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    employees: state.employees
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectEmployee: (id) => {
      dispatch({type: 'EDIT_USER_REQUEST', id: id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
