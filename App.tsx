import React from "react";
import { Provider } from "react-redux";
import { store } from "./component/Redux/Store";
import NavigationScreen from "./component/NavigationScreen/NavigationScreen";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationScreen />
    </Provider>
  )
}
export default App;