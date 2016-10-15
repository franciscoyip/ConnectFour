var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action)=>{

  var type = action.type;

  switch (type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
      //break;
    default:
      return state;
      //break;
  }

};

export var todosReducer = (state = [], action)=>{

  var type = action.type;

  switch (type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          createdAt: moment().unix(),
          completedAt: null
        }
      ];
      //break;
    case 'TOGGLE_TODO':

    case 'ADD_TODOS':

    default:
      return state;
      //break;
  }

};
