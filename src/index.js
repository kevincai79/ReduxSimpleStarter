import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCcpI023TrhR7YnHM0-DxlohTo3sHpkkVE';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// React.render(App);
ReactDOM.render(<App />, document.querySelector('.container'));
