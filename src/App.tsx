import React from "react";
import { Home } from "./pages";
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
};

export default App;
