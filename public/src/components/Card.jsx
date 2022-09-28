import React from 'react'
import styled from 'styled-components'
import SupportPreview from './SupportPreview'

export default function Card(props) {
  return (
    <Container>
      <div className='header'>
        <h3>{props.title}</h3>
      </div>
      <div className='body'>{props.children}</div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 30%;
  margin: 0.7rem 0;
  background-color: #0d0d3050;
  border-radius: 0.8rem;
  overflow: hidden;
  .header {
    height: 20%;
    width: 100%;
    background-color: #0d0d3070;
    padding: 0.5rem;

    h3 {
      color: white;
    }
  }

  .body {
    display: grid;
    grid-auto-flow: column;
    overflow: clip;
    padding: 1rem;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      height: 0.5rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
  }
`
