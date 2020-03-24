import React from 'react';
import Spinner from './components/spinner/spinner'
import Navbar from './components/navbar/navbar'

function App() {
  
  return (
    <div className="App" id="body">
      <Navbar/>
      <main>
        <h1>CSS is Cool</h1>
        <p>
          I'm baby kale chips affogato ennui lumbersexual, williamsburg paleo quinoa
          iceland normcore tumeric. Kitsch coloring book retro, seitan schlitz
          tattooed biodiesel vexillologist neutra. Synth mumblecore deep v, umami
          selfies normcore gluten-free snackwave. Seitan ramps drinking vinegar
          venmo keytar, humblebrag VHS post-ironic tacos godard pour-over.
        </p>
        <Spinner/>
      </main>
    </div>
  );
}

export default App;
