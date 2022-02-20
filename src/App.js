import logo from "./logo.svg";
import "./App.scss";
import { ProfilePage, Dialogs, News, Music, Settings } from "./pages";
import { Navigation } from "./components";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <Route path={"/profile"} component={ProfilePage} />
                <Route path={"/messages"} component={Dialogs} />
                <Route path={"/news"} component={News} />
                <Route path={"/music"} component={Music} />
                <Route path={"/settings"} component={Settings} />
            </div>
        </BrowserRouter>
    );
}

export default App;
