import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

// arquivo de inicialização
// injeta javascript dentro do arquivo /public/index.html
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
