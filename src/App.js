import "./App.css";
import Home from "./components/home";
import NavBar from "./components/navBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/footer";
import NotFound from "./components/notFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/notfound" component={NotFound} />
        <Redirect exact path="/" to="/home" />
        <Redirect path="/" to="/notfound" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
