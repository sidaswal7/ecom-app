import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Product from './components/Products/Product';

function App() {
  return (
    <div className="App">
      <Header/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
