import { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
//import Routes from "./";
import Main from "./views/index"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
export default App;