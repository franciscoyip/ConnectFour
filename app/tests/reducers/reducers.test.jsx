import {expect} from '../helper';

import {setMessageReducer} from '../../reducers/reducers';

describe('Reducers', ()=>{

  describe('setMessageReducer', ()=>{
    it('should set the message', ()=>{
      let action = {
        type:'SET_MESSAGE',
        message: 'Hello World'
      };
      const message = '';
      var response = setMessageReducer(message, action);
      expect(response).to.be.eql(action.message);
    });
  });

});
