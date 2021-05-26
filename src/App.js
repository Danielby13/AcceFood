import { Provider } from 'react-redux';
import store from './store/store.js';
import './App.css';
import Mape from './component/Mape.js';
import Filter from './component/Filter.js';
import List from './component/List.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Mape />
        <List />
        <Filter />
      </div>
    </Provider>
  );
}

export default App;
