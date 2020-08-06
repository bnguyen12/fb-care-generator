import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import ResultCard from "./components/ResultCard";

function App() {
  return (
    <div className="App">
      <Jumbotron fluid id="header">
        <Container fluid>
          <h1 className="display-5">Facebook Care Generator</h1>
          <hr />
          <p className="lead">Customize a care emoji to hold what you care about.</p>
        </Container>
      </Jumbotron>
      <div id="download-area">
        <ResultCard />
      </div>
    </div>
  );
}

export default App;
