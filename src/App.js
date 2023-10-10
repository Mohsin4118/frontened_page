import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import Analytics from './Components/Analytics/analytics';
import Newsletter from './Components/NewsLetter/newsletter';
import Card from './Components/Cards/cards'

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Analytics/>
     <Newsletter/>
    <Card/>
    </div>
  );
}

export default App;
