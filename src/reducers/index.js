const initialState = {
  slovo: 'spb',
  employees: [
    {name: 'Ilmir Nafikov', age: 26, salary: '$4500'},
    {name: 'Leo Messi', age: 27, salary: '$4500'},
    {name: 'Wayne Rooney', age: 28, salary: '$4500'}
  ],
  departments: [
    {
      name: 'Marketing',
      director: 'Fedor Ivanov'
    },
    {
      name: 'Sales',
      director: 'Fedor pirogov'
    },
    {
      name: 'R&D',
      director: 'Oleg Olegov'
    },
    {
      name: 'Support',
      director: 'Igor Popov'
    }
  ],
  activeEmployee: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'EDIT_USER_REQUEST':
      return Object.assign({}, state, {activeEmployee: action.id});
    case 'ADD_EMPLOYEE':
      return Object.assign({}, state, {employees: [...state.employees, action.employee]});
    case 'ADD_DEPARTMENT':
      return Object.assign({}, state, {departments: [...state.departments, action.department]});
    default:
      return state;
  }
}

export default rootReducer;