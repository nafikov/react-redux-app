const initialState = {
  tabs: [
    {
      id: 1,
      name: 'Tab 1',
      path: '/tabs/1',
      entries: []
    },
    {
      id: 2,
      name: 'Tab 2',
      path: '/tabs/2'
    },{
      id: 3,
      name: 'Tab 3',
      path: '/tabs/3',
      entries: []
    },
  ],
  entries: [],
  selectedTab: 1,
  slovo: 'spb',
  employees: [
    {id: 1, name: 'Ilmir Nafikov', age: 26, salary: '$4500'},
    {id: 2, name: 'Leo Messi', age: 27, salary: '$4500'},
    {id: 3, name: 'Wayne Rooney', age: 28, salary: '$4500'}
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
  selectedEmployee: null,
  activeEmployee: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ENTRY':
      return { ...state, entries: [...state.entries, action.entry]};

      // return Object.assign({}, state, {tabs: state.employees.find(empl => empl.id === action.id)});



      case 'ADD_EMPLOYEE':
      return Object.assign({}, state, {employees: [...state.employees, action.employee]});
    case 'REMOVE_EMPLOYEE':
      return Object.assign({}, state, {employees: state.employees.filter(emp => emp.id !== action.id)});
    case 'CANCEL_EDIT_EMPLOYEE':
      return Object.assign({}, state, {selectedEmployee: null});
    case 'ADD_DEPARTMENT':
      return Object.assign({}, state, {departments: [...state.departments, action.department]});
    case 'EDIT_EMPLOYEE':
      return Object.assign({}, state, {
        employees: state.employees.map(emp => {
            return emp.id !== action.id ? emp : Object.assign({}, emp, action.employee)
          }
        )
      });
    default:
      return state;
  }
}

export default rootReducer;