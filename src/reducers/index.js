const initialState = {
  slovo: 'spb',
  employees: [
    {name: 'Ilmir Nafikov', age: 26, salary: '$4500'},
    {name: 'Leo Messi', age: 27, salary: '$4500'},
    {name: 'Wayne Rooney', age: 28, salary: '$4500'}
  ],
  activeEmployee: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'EDIT_USER_REQUEST':
      return Object.assign({}, state, {activeEmployee: action.id});
    case 'ADD_EMPLOYEE':
      return Object.assign({}, state, {employees: [...state.employees, action.employee]});
    default:
      return state
  }
}

export default rootReducer;