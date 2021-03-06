import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "react-spinkit";
import Header from "./components/Header/Header";
import { AppBody, AppLoading, AppLoadingContent } from "./App.styles";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { auth } from "./firebase";
import Login from "./components/Login/Login";

function App() {
  const [user, loading] = useAuthState(auth);
  const imageUrl =
    "data:image/png;base64,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";

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img src={imageUrl} alt="Slack logo" />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    );
  }

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login image={imageUrl}/>
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />

              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
