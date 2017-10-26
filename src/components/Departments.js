import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button } from '../commons/Button';
import { Input } from '../commons/Input';

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

class Departments extends Component {

  clearInputs(e) {
    e.target.name.value = '';
    e.target.director.value = '';
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={e => {
          e.preventDefault();
          let dept = {};
          dept.name = e.target.name.value;
          dept.director = e.target.director.value;
          this.props.addDepartment(dept);
          this.clearInputs(e);
        }}>
          <label>Имя<Input
            type="text"
            name='name'
            // onChange={this.handleChange.bind(this, 'name')}
          /></label>
          <label>Директор<Input
            type="text"
            name='director'
            // onChange={this.handleChange.bind(this, 'director')}
          /></label>

          <Button type='submit'>Добавить</Button>
        </form>


        <table>
          <thead>
          <tr>
            <td>Name</td>
            <td>Director</td>
            <td>Staff</td>
          </tr>
          </thead>
          <tbody>
          {this.props.departments.map((dept, index) => {
            return (
              <tr key={index}>
                <td>{dept.name}</td>
                <td>{dept.director}</td>
                <td>{dept.name.length}</td>
                <td>
                  {/*<Link to={`/employees/${emp.age}`}>Редактировать</Link>*/}
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
    departments: state.departments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDepartment: (dept) => {
      dispatch({type: 'ADD_DEPARTMENT', department: dept})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Departments)
