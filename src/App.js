import logo from "./logo.svg";
import "./App.scss";
import { ProfilePage, Dialogs, News, Music, Settings } from "./pages";
import { Navigation } from "./components";
import { Route, BrowserRouter } from "react-router-dom";

function App({ postsData }) {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <Route
                    path={"/profile"}
                    render={() => <ProfilePage postsData={postsData} />}
                />
                <Route path={"/messages"} render={() => <Dialogs />} />
                <Route path={"/news"} render={() => <News />} />
                <Route path={"/music"} render={() => <Music />} />
                <Route path={"/settings"} render={() => <Settings />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
