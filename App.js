import React from "react";
import { Store } from "./redux/store";
import { Provider } from "react-redux";
import Index from "./screens/Index";
function App() {
  return (
    <Provider store={Store}>
      <Index />
    </Provider>
  );
}

export default App;
