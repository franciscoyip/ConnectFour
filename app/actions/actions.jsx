export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText //eq to ES5 searchText:searchText
  }
};
