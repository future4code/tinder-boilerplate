import React from "react";
import ReactDOM from "react-dom";
import store from './store';
import { Provider } from 'react-redux'
import Router from './containers/Router'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #D0D0D0;
  }
`;

const MainContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
`

const App = () => {
  return (
      <Provider store={store}>
        <GlobalStyle />
        <MainContainer>
            <Router />
        </MainContainer>
      </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
