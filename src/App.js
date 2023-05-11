import { BrowserRouter } from "react-router-dom";
import { store } from "Redux/store";
import { Provider } from "react-redux";
import { UtilityStyles } from "Styles/Utils";
import Website from "Components/Website";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Website />
        <UtilityStyles />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
