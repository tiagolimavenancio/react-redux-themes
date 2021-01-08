import React from "react";
import { Provider } from "react-redux";
import ThemeProvider from "./config/ThemeProvider";
import RootComponent from "./screens/RootComponent";
import ThemeContextComponent from "./screens/ThemeContextComponent";
import { store } from "./redux/configureStore";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ThemeProvider>
          <RootComponent />
          <ThemeContextComponent />
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
