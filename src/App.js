
import './App.css';
import { Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignOut from './pages/signIn-and-signout/signin-and-signout.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
