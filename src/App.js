import React from "react";
import "./App.css";
import { Wip, Header } from './components';
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <Wip />
      <Header />
      <Home />
    </div>
  );
}

export default App;
