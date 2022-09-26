import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import combinedReducer from './src/redux/reducers/reducer';
import Home from './src/screens/Home/Home';

const store = createStore(combinedReducer);

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
