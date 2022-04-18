import logo from "./logo.svg";
import "./App.scss";
import { ProfilePage, Dialogs, News, Music, Settings } from "./pages";
import { Navigation } from "./components";
import { Route, BrowserRouter } from "react-router-dom";
import UsersPage from "./pages/users";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Route
                path={"/profile"}
                render={() => (
                    <ProfilePage/>
                )}
            />
            <Route
                exact
                path={"/messages"}
                render={(props) => (
                    <Dialogs
                        {...props}
                    />
                )}
            />
           <Route
                path={"/users"}
                render={() => (
                    <UsersPage />
                )}
            />
            
            <Route path={"/news"} render={() => <News />} />
            <Route path={"/music"} render={() => <Music />} />
            <Route path={"/settings"} render={() => <Settings />} />
        </div>
    );
}

export default App;
