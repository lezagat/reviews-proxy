import React from 'react';
import ReactDOM from 'react-dom';

import PhotoServices from '../../../zagat-photos-service/client/components/App.jsx'
// import ZagatReviews from ...
// import GoogleReviews from ...
// import RestaurantInfo from ...

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <PhotoServices />
        <div>Proxy Server's app.js File!</div>
      </div>
    )
  }
}

export default App;
