import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './rootReducer'
import CameraPage from './pages/CameraPage'
import './index.css'

const store = createStore(rootReducer)
const App = () => {
  return (
    <>
      <Provider store={store} />
      <CssBaseline />
      <CameraPage />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
