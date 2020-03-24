import React from 'react';
import Navbar from './components/navbar/navbar'
import Grid from './components/grid/grid'
import Logs from './components/logs'
import Spinner from './components/spinner/spinner'
import './stylesheets/stylesheet.css'

function App() {
  
  return (
    <div className="App" id="body">
      <Spinner></Spinner>
      <Navbar/>
      <main>
        <h1>Bored at work ?</h1>
        <p>Hehe. Got Somthing for you 🎁</p>
        <div className="tracker-engine">
          
        </div>
      </main>
    </div>
  );
}

export default App;
