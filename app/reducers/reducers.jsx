export var setMessageReducer = (state = '', action)=>{

  var type = action.type;

  switch (type) {
    case 'SET_MESSAGE':
      return action.message;
      //break;
    default:
      return state;
      //break;
  }

};
