import gsap from 'gsap';
import React from 'react'
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components'

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  position: relative;
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: var(--fontxxl);
  text-transform: uppercase;
`;

const ColorSection = () => {
  const sectionRef = useRef(null);
  const rigthRef = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;
    let sectionElem = sectionRef.current;
    let leftElem = leftRef.current;
    let rightElem = rigthRef.current;
    let textElem = textRef.current;

    let updateColor = (color, text, rgbColor) => {
      textElem.innerText = text;
      rightElem.style.backgroundColor = `rgba(${rgbColor}, 0.4)`;
      leftElem.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
    }

    // pin this section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem.offsetWidth}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      }
    });

    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem.offsetWidth}`,
        scrub: 1
      }
    }).to(
      Elem,
      {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"]
      }
    ).to(
      Elem,
      {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"]
      }
    )

    return () => {

    }
  }, []);

  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef} />
      <Center ref={textRef}>Sierra Blue</Center>
      <Right ref={rigthRef} />
    </Section>
  )
}

export default ColorSection