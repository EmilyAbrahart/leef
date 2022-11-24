import Home from "./views/Home";
import { Provider } from "react-redux";
import store from "./state/store";
import {AppRouter} from './routes';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
