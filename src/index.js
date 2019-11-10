import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import CameraPage from './pages/CameraPage'
import './index.css'

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
