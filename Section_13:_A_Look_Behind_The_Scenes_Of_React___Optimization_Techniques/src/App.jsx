import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
    //setChosenCount((prevChosenCount) => prevChosenCount + 1);
    //console.log(chosenCount); //won't work!
  }
  //State changes are scheduled, so you can't change state, and then get the fresh state value in the next line
  //Multiple state value changes in the same function does not make the component to rerender multiple times (state batching)

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
