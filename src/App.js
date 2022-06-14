// import logo from './assets/logo.svg';
import './App.scss';
import Nfts from './components/Nfts';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Header />
      <Nfts />
    </div>
  );
}

export default App;
