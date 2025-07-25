import './App.css';
import WeatherWidget from './components/WeatherWidget';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interview Bug Fix App</h1>
        <p>This app contains intentional bugs for the interview</p>
      </header>
      <main style={{ padding: '20px' }}>
        <WeatherWidget city="New York" />
        <hr />
        <ShoppingCart />
      </main>
    </div>
  );
}

export default App;
