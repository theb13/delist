import React from 'react';
//css
import './App.css'

//components
import Home from './app/Home'
import '@fortawesome/fontawesome-free/css/all.css'

import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

export default props => (
  <div>
    <Home />
    <ReduxToastr
      timeOut={5000}
      newestOnTop={false}
      preventDuplicates={true}
      position='top-center'
      transitionIn='bounceInDown'
      transitionOut='fadeOut'
      progressBar
    />
  </div>
)