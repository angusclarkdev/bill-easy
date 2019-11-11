import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline, Container } from '@material-ui/core'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'

import rootReducer from './rootReducer'
import Menu from '@components/Menu'
import CameraPage from './pages/CameraPage'

const GlobalStyles = createGlobalStyle`
  #root {
    height: 100vh;
  }
`

const store = createStore(rootReducer)
const App = () => {
  return (
    <>
      <Provider store={store} />
      <GlobalStyles />
      <CssBaseline />
      <Menu />
      <CameraPage />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
