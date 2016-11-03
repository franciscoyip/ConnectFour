import {renderComponent, expect} from '../helper';

import Connect4Cell from '../../components/Connect4Cell';

describe('Connect4Cell', ()=>{

  it('should exist', ()=>{
    expect(Connect4Cell).to.exist;
  });

  it('should render a TD', ()=>{
    var $el = renderComponent(Connect4Cell);
    var tagname = $el.prop('tagName').toLowerCase();
    expect(tagname).to.be.equal('td');
  });

});
