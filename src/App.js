import React from 'react';
import Header from './components/Header';
import ResultCard from "./components/ResultCard";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="download-area">
        <ResultCard />
      </div>
    </div>
  );
}

export default App;
