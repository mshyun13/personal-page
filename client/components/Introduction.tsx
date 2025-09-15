import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

function Introduction() {

  useGSAP(() => {
    gsap.fromTo('.introWrapper .textBox .mask span', {
      backgroundSize: '0%, 100%'
    }, {
      backgroundSize: '100%, 100%',
      scrollTrigger: {
        trigger: '.introWrapper .textBox',
        pinnedContainer: '.introWrapper .textBox',
        start: '0%, 45%',
        end: '100%, 45%',
        scrub: 1
      }
    })
  })

  return ( 
    <>
      <div id="introduction" className="introWrapper">
        <div className="introTitleBox">
          <span className="text">
            {`Min Seunghyun`}
          </span>
        </div>
        <div className="textBox">
          <span className="mask">
            <span className="text">
              {`I'm Seunghyun, a full-stack web developer driven by a growth mindset and a passion for problem-solving.`}<br />
              {`With analytical thinking and strong communication skills, I'm excited to take on new challenges in the tech industry, combining technical expertise with collaboration to build meaningful solutions.`} <br />
            </span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Introduction