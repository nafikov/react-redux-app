import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button } from '../commons/Button';
import { Input } from '../commons/Input';

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

  isInputValid(e) {
    return e.target.name.value.trim !== '' &&
          e.target.age.value.trim !== '' &&
          e.target.salary.value.trim !== ''
  }

  clearInputs(e) {
    e.target.name.value = '';
    e.target.age.value = '';
    e.target.salary.value = '';
  }

  render() {
    console.log(this.tmp_user);
    return (
      <Wrapper>
        <form onSubmit={e => {
          e.preventDefault();
          console.log('check-valid', !this.isInputValid(e));
          if (!this.isInputValid(e)) {

            return;
          }
          let user = {};
          user.name = e.target.name.value;
          user.age = e.target.age.value;
          user.salary = e.target.salary.value;
          this.props.addEmployee(user);
          this.clearInputs(e);
        }}>
          <label>Имя<Input
            type="text"
            name='name'
            onChange={this.handleChange.bind(this, 'name')}
          /></label>
          <label>Возраст<Input
            type="text"
            name='age'
            onChange={this.handleChange.bind(this, 'age')}
          /></label>
          <label>Доход<Input
            type="text"
            name='salary'
            onChange={this.handleChange.bind(this, 'salary')}
          /></label>
          <Button type='submit'>Добавить</Button>
        </form>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Number</td>
              <td>Director</td>
              <td>Удалить</td>
              <td>Редактировать</td>
            </tr>
          </thead>
          <tbody>
          {this.props.employees.map((emp, index) => {
            console.log('render id', emp)
            return (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.salary}</td>
                <td>
                  <button onClick={() => this.props.removeEmployee(emp.id)}>Удалить</button>
                </td>
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
    },
    removeEmployee: (id) => {
      dispatch({type: 'REMOVE_EMPLOYEE', id: id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
