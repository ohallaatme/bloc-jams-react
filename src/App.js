import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav class="navigation">
            <div id="linkOne">
              <Link to='/' id="landingLink">Home</Link>
            </div>
            <div id="linkTwo">
            <Link to='/library' id="libraryLink">Library</Link>
            </div>
          </nav>
          <div className="jumbotron">
          <h1>Bloc Jams</h1>
          </div>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />

        </main>
      </div>
    );
  }
}

export default App;
