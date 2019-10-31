import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import {Provider} from 'react-redux'
import Router from './containers/Router'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  body {
    margin: 0;
    background-color: #D0D0D0;
    font-family: Roboto, sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`

const MainContainer = styled.div`
  width: 400px;
  height: 700px;
  margin: 20px auto;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;
`

const App = () => {
	return (
		<Provider store={store}>
			<GlobalStyle/>
			<MainContainer>
				<Router/>
			</MainContainer>
		</Provider>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)
