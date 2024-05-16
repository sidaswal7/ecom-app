import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Product from './components/Products/Product';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 className="mb-8 py-8 text-black text-center font-bold text-4xl bg-slate-300 font-robo">UrbanCart</h1>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
