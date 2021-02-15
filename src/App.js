import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";
import Cookie from "./Cookie/Cookie";
import ExchangePoint from "./ExchangePoint/ExchangePoint";
import Contacts from "./Contacts/Contacts";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/ExchangePoint" component={ExchangePoint} />
                <Route exact path="/Contacts" component={Contacts} />
                <Rate />
              </Switch>
            </Router>
          </main>
        </div>
        <Cookie />
        <Footer />
      </div>
    );
  }
}
export default App;
