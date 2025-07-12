import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import { SplitText } from 'gsap/all';

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(SplitText) 

function Introduction() {
  const greeting = useRef()
  const vision = useRef()

  useGSAP(() => {
    const greetingSplit = SplitText.create(".greeting", {type: 'chars, words, lines'})
    const visionSplit = SplitText.create(".vision", {type: 'chars, words, lines'})

    gsap.from(greetingSplit.chars, {
      // duration: 1,
      // y: 100,
      // autoAlpha: 0,
      // stagger: 0.05,

      x: 150,
      opacity: 0,
      duration: 0.7,
      ease: "power4",
      stagger: 0.04,
    })

    gsap.from(visionSplit.chars, {
      // duration: 1,
      // y: 100,
      // autoAlpha: 0,
      // stagger: 0.05,

      x: 150,
      opacity: 0,
      duration: 0.7,
      ease: "power4",
      stagger: 0.04,
    })
  })

  return (
    <>
      <div ref={greeting} className="greeting">
        <h2>Hello I'm Seunghyun and I'm full stack web developer.</h2>
      </div>
      <div ref={vision} className="vision">
        <h4>Share my learnings and grow together.✈</h4>
        <p>I love to share my knowledge and grow up with team members.</p>
        <p>Majored Computer Science and Information System, and graduated Dev Academy full stack developer course.</p>
      </div>
    </>
  )
}

export default Introduction