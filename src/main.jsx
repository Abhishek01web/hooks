import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import User from './components/customHook/User.jsx'
// import UseState from './components/UseState.jsx'
// import UseEffect from './components/useEffect.jsx'
import Contex from './components/context/Contex.jsx'
// import UseRef from "./components/useRef/UseRef.jsx"
// import TrackValue from './components/useRef/TrackValue.jsx'
// import UseReducer from './components/useReducer/UseReducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <User />
    {/* <App /> */}
    {/* <UseState /> */}
    {/* <UseEffect /> */}
    <Contex />
    {/* <UseRef /> */}
    {/* <TrackValue /> */}
    {/* <UseReducer /> */}
  </React.StrictMode>,
)
