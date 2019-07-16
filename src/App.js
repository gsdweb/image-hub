import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/search/search';
import Container from '@material-ui/core/Container';

import './App.css';

class App extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <Container maxWidth="md">
        <div><h2>Image Hub</h2><p>Apis Ativos: Pixabay</p></div>
        <div><Search /></div>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default App;
