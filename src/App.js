import { Provider } from 'react-redux/es/exports'
import './App.css'
import Checkout from './TS/Checkout'
import { store } from './store'

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Checkout />
            </Provider>
        </div>
    )
}

export default App
