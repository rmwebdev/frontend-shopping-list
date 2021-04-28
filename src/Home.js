import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap';
class Home extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
    }
  render() {
    return (
        <div className="App">
              <Container>
              <ItemModal />
                <ShoppingList />
              </Container>
      </div>
    );
  }
  }
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, null )(Home);
