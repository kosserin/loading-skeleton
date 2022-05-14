import React from 'react';
import Items from './components/Items/Items';

function App() {
  return (
    <React.Fragment>
      <h1>Kosserin's loading skeleton</h1>
      <p>This is just an example of how to implement loading skeleton while data is not fully loaded. If you don't see loading skeleton, go for Network and select slower internet to see it. Code is available on my <a href='https://github.com/kosserin/loading-skeleton' target="_blank">GitHub</a></p>
      <Items />
    </React.Fragment>
  );
}

export default App;
