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

class EmployeeEditor extends Component {
  render() {
    return (
      <Wrapper>
        <h6>Редактирование работника</h6>
        <div>{this.props.employee.name}</div>

      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    employee: state.employees.find(emp => {
      return emp.age === state.activeEmployee
    })
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectEmployee: (id) => {
      dispatch({type: 'EDIT_USER_REQUEST', id: id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEditor)
