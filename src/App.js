import './App.css';
import Header from './UI/Header';
import NewProduct from './newProducts/NewProduct';
import MedicinsList from './showMedicinsList/MedicinsList';

function App() {
  return (
    <div className="App">
      <Header />
      <NewProduct />
      <MedicinsList />
    </div>
  );
}

export default App;
