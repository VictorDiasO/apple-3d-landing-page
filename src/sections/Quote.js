import React from 'react'
import styled, { keyframes } from 'styled-components'

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContaier = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--dark);
  color: var(--white);
`;

const moveUp = keyframes`
  100% {
    transform: translateY(0);
  }
`;

const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;

  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Quote = () => {
  return (
    <Section>
      <TextContaier>
        <Text> <span>line-2</span> </Text>
        <Text> <span>line-1</span> </Text>
        <Text> <span>line-3</span> </Text>
        <Text> <span>line-4</span> </Text>
        <Text> <span>line-5</span> </Text>
      </TextContaier>
    </Section>
  )
}

export default Quote