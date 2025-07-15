import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(SplitText) 
gsap.registerPlugin(ScrollTrigger)

function Introduction() {
  const greeting = useRef()
  const vision = useRef()

  useGSAP(() => {
    const greetingSplit = SplitText.create(".greeting", {type: 'chars, words, lines'})
    const visionSplit = SplitText.create(".vision", {type: 'chars, words, lines'})

    const ani1 = gsap.timeline()
    ani1.to("#section1 .welcome", {scale: 60, duration: 2, autoAlpha: 0})

    ScrollTrigger.create({
      animation: ani1,
      trigger: '#section1',
      start: 'top top',
      end: '+=2000',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: true
    })
    
    const ani2 = gsap.timeline()
    ani2.from(greetingSplit.chars, {
      x: 150,
      autoAlpha: 0,
      duration: 0.7,
      ease: 'power4',
      stagger: 0.04
    })

    ScrollTrigger.create({
      animation: ani2,
      trigger: '.greeting',
      start: 'top top',
      end: '+=2000',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      // markers: true
    })

    const ani3 = gsap.timeline()
    ani3.from(visionSplit.words, {
      yPercent: 100,
      autoAlpha: 0,
      duration: 0.7,
      ease: 'circ.out',
      stagger: 0.01,
    })

    ScrollTrigger.create({
      animation: ani3,
      trigger: ".vision",
      pin: true,
      start: 'top top',
      end: '+=2000',
      scrub: true,
      // markers: true,
    })

    // gsap.from(greetingSplit.chars, {
    //   x: 150,
    //   opacity: 0,
    //   duration: 0.7,
    //   ease: "power4",
    //   stagger: 0.04,
    // })

    // gsap.from(visionSplit.words, {
    //   yPercent: 100,
    //   autoAlpha: 0,
    //   duration: 2,
    //   ease: "circ.out",
    //   stagger: 0.01,

    //   // scrollTrigger: {
    //   //   trigger: ".vision",
    //   //   pin: true,
    //   //   start: "top center",
    //   //   end: "bottom center",
    //   //   markers: true,
    //   //   scrub: 1,
    //   // }
    // })
  })

  return (
    <>
      <section id="section1" className="grey">
        <h2 className="welcome">Welcome!</h2>
      </section>
      <div ref={greeting} className="blue greeting">
        <h2 ref={greeting}>Hello I'm Seunghyun and I'm full stack web developer.</h2>
      </div>
      <div ref={vision} className="grey vision">
        <h4 ref={vision}>Share my learnings and grow together.✈</h4>
        <p>I love to share my knowledge and grow up with team members.</p>
        <p>Majored Computer Science and Information System, and graduated Dev Academy full stack developer course.</p>
      </div>
    </>
  )
}

export default Introduction