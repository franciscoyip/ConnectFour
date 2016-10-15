var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({

  /*
  handleSearch: function(e){
    //e.preventDefault();
    var searchText = this.refs.searchText.value;
    var showCompleted = this.refs.showCompleted.checked;
    this.props.onSearch(showCompleted, searchText);
  },
  */
  render: function(){
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container-header">
        <div>
          <input type="search" ref="searchText" placeholder="Search for todos?" value={searchText} onChange={()=>{
              var searchText = this.refs.searchText.value;
                dispatch(actions.setSearchText(searchText));
            }}/>
        </div>
        <div>
          <label><input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{
              dispatch(actions.toggleShowCompleted());
            }}/> Show completed todos</label>
        </div>
      </div>
    );
  }
});

export default connect(
  (state)=>{
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoSearch);