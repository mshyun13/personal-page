import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

function AboutMe () {

  useGSAP(() => {
    gsap.fromTo('.aboutMeWrapper .textBox .mask span', {
      backgroundSize: '0%, 100%'
    }, {
      backgroundSize: '100%, 100%',
      scrollTrigger: {
        trigger: '.aboutMeWrapper .textBox',
        pinnedContainer: '.aboutMeWrapper .textBox',
        start: '0% 50%',
        end: '40% 50%',
        scrub: 1
      }
    })
  })

  return (
    <>
      <div id="aboutme" className="aboutMeWrapper">
        <div>
          <span className="title">{`About me`}</span><br />
        </div>
        <div className="textBox">
          <span className="mask">
            <span className="text">{`I hold a Bachelor of Science in Computer Science and Information Systems, with a focus on database studies. I previously worked as a sales support and pricing analyst for 18 months at PB Tech. Recently, I completed a full-time web development bootcamp at Dev Academy, gaining practical experience in full-stack development.`}<br />
            {`Moving into the tech industry has long been my ultimate goal, and combining the knowledge from my university studies with the hands-on learning at Dev Academy has strengthened my commitment to this path. With strong communication and human skills, I'm eager to take on new challenges in this field and to develop creative, collaborative solutions to complex problems.`}</span>
          </span>
        </div>
        <ul className="icons">
          <li className="githubIcon">
            <a href={'https://www.linkedin.com/in/seunghyun-min-b55325269/'}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github icon" />
            </a>
          </li>
          <li className="linkedinIcon">
            <a href={`https://github.com/mshyun13`}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="linkedinIcon" />
            </a>
          </li>
          <li className="resume">
            <a href={"../../files/Resume - Seunghyun Min.pdf"} download={'Seunghyun Min Resume'}>{`Resume`}</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default AboutMe