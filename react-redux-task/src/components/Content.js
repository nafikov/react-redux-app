import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const Wrapper = styled.div`
  //height: 100px;
  //display: flex;
  //justify-content: space-between;
  align-items: center;
`;

const List = styled.ul`
  list-style-type: none;
`;

class Content extends Component {
  render() {
    return (
      <Wrapper>
        <List>
          {this.props.entries.map(e => (
            <li><label htmlFor=""><input type="checkbox"/>{e.name}</label></li>
          ))}
          {/*<li><label htmlFor=""><input type="checkbox"/> Задача 1</label></li>*/}
          {/*<li><label htmlFor=""><input type="checkbox"/> Задача 1</label></li>*/}
          {/*<li><label htmlFor=""><input type="checkbox"/> Задача 1</label></li>*/}
        </List>
        <button>Удалить</button>
      </Wrapper>

    )
  }
}


function mapStateToProps(state) {
  return {
    entries: state.entries
  }
}

export default connect(mapStateToProps)(Content)