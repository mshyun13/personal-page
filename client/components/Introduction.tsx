import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import { SplitText } from 'gsap/all';

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(SplitText) 

function Introduction() {
  const greeting = useRef()

  useGSAP(() => {
    const split = SplitText.create(".text", {type: 'words'})

    gsap.from(split.words, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: 'none'
    })
  })

  return (
    <>
      <div ref={greeting} className="text">
        <h2>Hello I'm Seunghyun and I'm full stack web developer.</h2>
      </div>
      <div>
        <h4>Share my learnings and grow together.✈</h4>
        <p>I love to share my knowledge and grow up with team members.</p>
        <p>Majored Computer Science and Information System, and graduated Dev Academy full stack developer course.</p>
      </div>
    </>
  )
}

export default Introduction