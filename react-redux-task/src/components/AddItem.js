import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// const NavLink = styled(Link)`
//   width: 200px;
//   display: inline-block;
//   padding: 10px 20px;
//   box-sizing: border-box;
//   background-color: #5F9EA0;
//   border-bottom: 1px solid #fff
// `;

const Form = styled.form`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class AddItem extends Component {
  currentSelect = null;

  selectHandler(e) {
    // console.log(e.target.value);
    this.currentSelect = e.target.value;
    // console.log(this.currentSelect);
  }

  submitHandler(e) {
    e.preventDefault();
    // console.log(e.target.check.checked);  Получаем checked значение true/false
    // console.log(e.target.tab.value);

    let entry = {};
    entry.name = e.target.name.value;
    entry.tab = e.target.tab.value;
    this.props.addEntry(entry);

    e.target.name.value = '';
    e.target.tab.value = '';

  }

  render() {
    return (
      <Form onSubmit={this.submitHandler.bind(this)}>
        <input type="text" name="name" placeholder="Введите задачу" required/>
        <input type="checkbox" name='check'/>
        <select name="tab" onChange={this.selectHandler.bind(this)} required>
          <option selected disabled value=''>Выберите вкладку</option>
          {this.props.tabs.map(tab => (
            <option value={tab.id} key={tab.id}>{tab.name}</option>
          ))}
        </select>
        <button type="submit">Добавить</button>
        {/*<NavLink to='/departments'>Departments</NavLink>*/}
        {/*<NavLink to='/employees'>Employees</NavLink>*/}

      </Form>

    )
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addEntry: (entry) => {
      dispatch({type: 'ADD_ENTRY', entry: entry})
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

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
