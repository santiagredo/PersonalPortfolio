import React from 'react';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Projects } from './Components/Projects';
import { Footer } from './Components/Footer';

function App() {
  
  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <Projects/>
      <Footer/>
    </React.Fragment>
  )
}

export default App