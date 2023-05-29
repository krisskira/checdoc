import { Provider } from "react-redux";
import { RouterApp } from "./share/router";
import { store } from "./share/redux";
import ThemeProvider from 'react-bootstrap/ThemeProvider'

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterApp />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
