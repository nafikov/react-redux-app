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

  saveEmployee(e) {
    console.log('NAME', e.target.name.value);
    let emp = {};
    emp.name = e.target.name.value;
    emp.age = e.target.age.value;
    emp.salary = e.target.salary.value;
    this.props.editEmployee(emp, this.props.selectedEmployee.id);
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

  showEditor() {
    if (this.props.selectedEmployee) {
      return (<form action="">
        <label>Имя<Input
          type="text"
          name='name'
          defaultValue={this.props.selectedEmployee.name}
          // onChange={this.handleChange.bind(this, 'name')}
        /></label>
        <label>Возраст<Input
          type="text"
          name='age'
          defaultValue={this.props.selectedEmployee.age}
          // onChange={this.handleChange.bind(this, 'age')}
        /></label>
        <label>Доход<Input
          type="text"
          name='salary'
          defaultValue={this.props.selectedEmployee.salary}
          // onChange={this.handleChange.bind(this, 'salary')}
        /></label>

        <Button type='button' onClick={this.props.cancelEditEmployee}>Отменить</Button>
        <Button type='submit' onClick={this.saveEmployee}>Сохранить</Button>
      </form>)
    }
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
            return (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.salary}</td>
                <td>
                  <button onClick={() => this.props.removeEmployee(emp.id)}>Удалить</button>
                </td>
                <td>
                  <button onClick={() => this.props.selectEmployee(emp.id)}>Редактировать</button>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>

        {this.showEditor()}

      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    employees: state.employees,
    selectedEmployee: state.selectedEmployee
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
    },
    cancelEditEmployee: (id) => {
      dispatch({type: 'CANCEL_EDIT_EMPLOYEE', id: id})
    },
    editEmployee: (employee, id) => {
      dispatch({type: 'EDIT_EMPLOYEE', employee: employee, id: id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
