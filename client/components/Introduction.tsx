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
    const greetingSplit = SplitText.create("#section2 .greeting_text", {type: 'chars, words, lines'})

    // welcome animation
    const ani1 = gsap.timeline()
    ani1.to('#section1 .welcome', {scale: 60, duration: 2, autoAlpha: 0})

    ScrollTrigger.create({
      animation: ani1,
      trigger: '#section1',
      start: 'top top',
      end: '+=1000',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      // markers: true
    })
    
    // greeting animation
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
      end: '+=1000',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      // markers: true
    })

    // vision animation
    const ani3 = gsap.timeline()
    ani3.from('#section3 .t1', {autoAlpha: 0, duration: 1, y: 50}, "+=1")
    .from('#section3 .t2', {autoAlpha: 0, duration: 1, y: 50}, "+=1")
    .from('#section3 .t3', {autoAlpha: 0, duration: 1, y: 50}, "+=1")

    ScrollTrigger.create({
      animation: ani3,
      trigger: ".vision",
      pin: true,
      start: 'top top',
      end: '+=2000',
      scrub: true,
      // markers: true,
    })
  })

  return (
    <>
      <section id="section1" className="navy">
        <h2 className="welcome">Welcome!</h2>
        <span className="num">01</span>
      </section>
      <section ref={greeting} id="section2" className="grey greeting">
        <h2 className="greeting_text">{`Hello I'm Seunghyun and I'm full stack web developer.`}</h2>
        <span className="num">02</span>
      </section>
      <section ref={vision} id="section3" className="navy vision">
        <p className="vision_text t1">Share my learnings and grow together.✈</p>
        <p className="vision_text t2">I love to share my knowledge and grow up with team members.</p>
        <p className="vision_text t3">Majored Computer Science and Information System, and graduated Dev Academy full stack developer course.</p>
        <span className="num">03</span>
      </section>
    </>
  )
}

export default Introduction