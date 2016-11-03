var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var {connect} = require('react-redux');
var actions = require('actions');

export var ErrorModal = React.createClass({
  componentWillUnmount: function(){
    var {dispatch} = this.props;
    dispatch(actions.setErrorMessage(''));
  },
  renderModal: function(){
    var {message} = this.props;

    if(!message || message.length <= 0){return;}

    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Oops!!</h4>
        <p className='errorMessage'>{message}</p>
        <p>
          <button className="button hollow" data-close="">OK</button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();

  },
  render: function(){
    this.renderModal();
    return <div></div>;
  }
});

export default connect(
  //state this component need
  (state)=>{
    return {message: state.message};
  }
)(ErrorModal);
