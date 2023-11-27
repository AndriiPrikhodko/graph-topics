import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import type {} from 'redux-thunk/extend-redux'
import App from './App'
import store from './store'
import { BrowserRouter as Router } from "react-router-dom"

if (process.env.NODE_ENV === 'development' && 
  process.env.REACT_APP_MOCK === 'true') {
  const { worker } = require('./mocks/browser')
    worker.start()
    worker.printHandlers()
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>
)
