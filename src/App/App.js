import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { createNote, search } from '../actions/notes';

import Cookies from 'js-cookie';
import Menu from '../components/Menu';
import Landing from '../components/Landing';
import Register from '../components/Register';
import SignIn from '../components/SignIn';
import SignOut from '../components/SignOut';
import List from '../components/List';
import Edit from '../components/Edit';
import Create from '../components/Create';
import Note from '../components/Note';
import './App.css';

class App extends Component {
  render() {
    return (
      <Row className="Container">
        <Menu />
        <Col xs='12' md='9' className="ContentArea">
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signout" component={SignOut} />
          <Route exact path="/notes" component={List} />
          <Route path="/notes/:id" component={Note} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
        </Col>
      </Row>
    );
  }
}

export default connect(null, { createNote, search })(App);
