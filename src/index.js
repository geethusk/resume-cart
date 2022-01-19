import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { createStore,action,StoreProvider} from 'easy-peasy'
import { QueryClient,QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


const store = createStore({
  userData:{
   fullname:"",
   email:"",
   profilePic:"",
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
  }),
  changeProfilePic :action((state,payload)=>{
    state.userData.profilePic = payload
  })
})

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ReactQueryDevtools />
    </QueryClientProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
