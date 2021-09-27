import React, { useState } from "react";
import "./App.css";
import { AppContainer, Header, Reactions, Button } from "./styles/app.styles";
import Emojis from "./components/Emojis";

function App() {
  const [chosen, setChosen] = useState();
  return (
    <AppContainer>
      <Reactions>
        <Header>How was your experience?</Header>
        <Emojis chosen={chosen} setChosen={setChosen} />
        <Button
          backgroundColor={chosen >= 0 ? `rgb(0, 0, 0)` : `rgb(0, 0, 0, 0.25)`}
          cursor={chosen >= 0 ? `pointer` : `not-allowed`}
        >
          Submit
        </Button>
      </Reactions>
    </AppContainer>
  );
}

export default App;
