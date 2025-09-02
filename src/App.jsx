import { useState } from "react";
import { AppProvider } from "./context/context";
import MainPage from "./pages/MainPage";

function App() {
  const [cartData, setCartData] = useState([]);
  console.log(cartData);

  return (
    <AppProvider.Provider value={{ cartData, setCartData }}>
      <MainPage></MainPage>;
    </AppProvider.Provider>
  );
}

export default App;
