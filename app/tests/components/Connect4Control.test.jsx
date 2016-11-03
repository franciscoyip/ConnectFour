import {renderComponent, expect} from '../helper';

import Connect4Control from '../../components/Connect4Control';

describe('Connect4Control', ()=>{

  it('should exist', ()=>{
    expect(Connect4Control).to.exist;
  });

  it('should render seven a tags with arrow class', ()=>{
    var $el = renderComponent(Connect4Control);
    var divtags = $el.find('div');
    var divClass = divtags.attr('class');
    expect(divtags.length).to.be.equal(7);
    expect(divClass).to.contain('arrow');
  });

});
