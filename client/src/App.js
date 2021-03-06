import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import {Provider} from 'react-redux';
import ShoppingList from './components/ShoppingList';
import store from './store';
import ItemModel from './components/ItemModel';
import { Container } from "reactstrap";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModel />
          <ShoppingList />
        
        </Container>
      </div>
    </Provider>
  );
}

export default App;
