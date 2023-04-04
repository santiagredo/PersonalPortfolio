import React from 'react'
import './App.css'
import { Header } from './Header/Header';
import { About_me } from './About_me/About_me';
import { Projects } from './Projects/Projects';
import { Footer } from './Footer/Footer';

function App() {
  
  return (
    <React.Fragment>
      <Header/>
      <About_me/>
      <Projects/>
      <Footer/>
    </React.Fragment>
  )
}

export default App


//  header -> about me - projects - contact
//  about me
//  projects
//  footer -> contact