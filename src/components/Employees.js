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
  width: 800px;
  background-color: lightblue;
`;

class Employees extends Component {
  tmp_user = {};

  handleChange(name, e) {
    // let change = {};
    this.tmp_user[name] = e.target.value;
  }

  addEmployee() {

  }

  render() {
    console.log(this.tmp_user);
    return (
      <Wrapper>
        <form onSubmit={e => {
          e.preventDefault();
          let user = {};
          user.name = e.target.name.value;
          user.age = e.target.age.value;
          user.salary = e.target.salary.value;
          this.props.addEmployee(user);

        }}>
          <label>Имя<input
            type="text"
            name='name'
            onChange={this.handleChange.bind(this, 'name')}
          /></label>
          <label>Возраст<input
            type="text"
            name='age'
            onChange={this.handleChange.bind(this, 'age')}
          /></label>
          <label>Доход<input
            type="text"
            name='salary'
            onChange={this.handleChange.bind(this, 'salary')}
          /></label>
          <button onClick={this.props.addEmployee} type='submit'>Добавить</button>
        </form>
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
    },
    addEmployee: (emp) => {
      dispatch({type: 'ADD_EMPLOYEE', employee: emp})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
