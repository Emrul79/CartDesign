import { useReducer } from "react";
import { AppProvider } from "./context/context";
import MainPage from "./pages/MainPage";
import { initialState, productReducer } from "./reducer/productReducer";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The main app component.
 *
 * This component wraps the main page with the app context provider.
 * It also initializes the state and dispatch using the useReducer hook.
 *
 * @returns The main app component.
 */
/*******  ffd06ef3-d463-4650-b8c0-e1ba41d72246  *******/ function App() {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <AppProvider.Provider value={{ state, dispatch }}>
      <MainPage></MainPage>;
    </AppProvider.Provider>
  );
}

export default App;
