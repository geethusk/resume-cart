import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { createStore,action,StoreProvider} from 'easy-peasy'

const store = createStore({
  userData:{
   fullname:"",
   email:"",
   isLoggedIn: false,
   isAdmin: false
  },
  changeFullName:action((state,payload)=>{
      state.userData.fullname = payload
  }),
  changeEmail : action((state,payload)=>{
      state.userData.email  = payload
  }),
  toggleIsLoggedIn : action((state,payload)=>{
   state.userData.isLoggedIn = payload
  }
  ),
  toggleIsAdmin : action((state,payload)=>{
   state.userData.isAdmin = payload
  }
  )
})

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
