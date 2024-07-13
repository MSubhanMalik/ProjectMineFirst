import React from 'react'
import Front from './HomeSubComp/Front'
import About from './About'
import styled from 'styled-components'
import Contact from './Contact'
import Services from './Services'
import NavbarComp from './../Components/Navbar';

export default function Home() {
  return (
    <>
    <HomeBlock>
      <section id = 'home'>
      <Front />
      </section>
    </HomeBlock>
    <section id = 'about'>
      <About/>
    </section>
    <section id='services'>

      <Services />
    </section>
    <section id='contact'>

      <Contact />
    </section>
      </>
  )
}


export const HomeBlock = styled.div`
  padding-left: 10rem;
  padding-right: 10rem;
`