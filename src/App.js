import React, { components } from "react";
import Routes from './routes';
import "./styles.css";
import Header from './components/Header';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      {/* chamando a função header e main */}
      <Header />
      <Routes />
    </div>
  );
}

export default App; //exportando o app
