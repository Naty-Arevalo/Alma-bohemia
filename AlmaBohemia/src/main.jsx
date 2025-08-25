
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import { FiltersProvider } from './context/Filters.jsx'
import {Provider} from 'react-redux'
import {store} from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
