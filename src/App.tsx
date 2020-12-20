import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AppStyles from "./App.styles";
import Home from "./views/Home/Home";
import Popup from "./components/Popup/Popup";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import { ApplicationState } from "./store";

const App: React.FC = () => {
  const store = useSelector((reduxState: ApplicationState) => reduxState);
  const theme = store.theme.Theme;
  const pop = store.popup.Popup;

  const CSS = AppStyles.factory(theme);

  return (
    <>
    <Popup message={pop.message} visibile={pop.visibile} />
      <div style={{ padding: "0 5%", backgroundColor: CSS.grey }}>
        <NavBar theme={theme} />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
        <Footer theme={theme} />
      </div>
    </>
  );
};

export default App;
