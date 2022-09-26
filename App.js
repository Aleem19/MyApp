import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import HomePage from './HomePage';
import combinedReducer from './Redux/reducers/reducer';

const store = createStore(combinedReducer);

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

export default App;
