import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home/Home'
import './index.css'
import {Provider} from 'react-redux'
import store from './redux/store'


ReactDOM.render(
     <>
       <Provider store ={store}>
           <Home />
       </Provider>
     </>,
     document.getElementById('root'))
