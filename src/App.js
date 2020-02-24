import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { ApolloProvider } from "react-apollo";
import { Router } from 'react-router-dom';
import apolloClient from './apolloClient';
import './App.css';
import history from './routes/history';
import Portal from './views';

function App() {
  return (
    <Router history={history}>
      <ApolloProvider client={apolloClient}>
        <CssBaseline />
        <Portal />
      </ApolloProvider>
    </Router>
  );
}

export default App;
