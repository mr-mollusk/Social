import logo from './logo.svg';
import './App.scss';
import { ProfilePage } from './pages';
import { Navigation } from './components';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <ProfilePage/>
    </div>
  );
}

export default App;
