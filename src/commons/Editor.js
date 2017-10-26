import React, { Component } from 'react';
import styled from 'styled-components';

export default function Editor(props) {
  <form action="">
    <label>Имя<Input
      type="text"
      name='name'
      value={this.props.selectedEmployee.name}
      onChange={this.handleChange.bind(this, 'name')}
    /></label>
    <label>Возраст<Input
      type="text"
      name='age'
      value={this.props.selectedEmployee.age}
      onChange={this.handleChange.bind(this, 'age')}
    /></label>
    <label>Доход<Input
      type="text"
      name='salary'
      value={this.props.selectedEmployee.salary}
      onChange={this.handleChange.bind(this, 'salary')}
    /></label>
    <Button type='submit'>Добавить</Button>
  </form>
}