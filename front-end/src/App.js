// IMPORTS
import './App.css';
import ListStocks from './components/ReadStocks';
import CreateStock from './components/CreateStock';


// FUNCTIONAL COMPONENT
const App = () => {
  // VANILLA JS SECTION



  // JSX SECTION
  return (
    <div className="App">

      <CreateStock />

      <ListStocks />

    </div>
  );
}

export default App;
