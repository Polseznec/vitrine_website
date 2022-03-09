import { GlobalStyles } from "./GlobalStyles.style";

import * as C from "./Components/Containers/styles";
import * as I from "./Components/Inputs/Inputs.styles";

function App() {
  return (
    <C.App className="App">
      <GlobalStyles />

      <I.Button text="Test" />
    </C.App>
  );
}

export default App;
