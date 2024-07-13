import React from 'react'
import styled from 'styled-components'
import { HomeBlock } from './Home'

export default function PageTop({title}) {
  return (
    <TopContainer className='d-flex aboutBlock flex-row justify-content-center '>
         <div className="titleHolder mx-auto my-auto">
            <h2>{title}</h2>
          </div>
    </TopContainer>
  )
}

const TopContainer = styled(HomeBlock)`
    height: 15rem;
    width: 100%;
    padding: 0px !important;
    margin: 0px !important;
    

`