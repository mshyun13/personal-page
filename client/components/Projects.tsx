import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  
  useGSAP(() => {
    gsap.utils.toArray('.container .projectList .project').forEach((el) => {
      const selector = el as HTMLElement
      gsap.timeline({
        scrollTrigger: {
          trigger: selector,
          start: '0% 35%',
          end: '0% 0%',
          scrub: 1,
        }
      })
      .to(selector, {
        rotateX: -10,
        scale: 0.9,
        transformOrigin: 'top',
        filter: 'brightness(0.3)'
      }, 0)
    })
  })

  return (
    <>
      <div id="section2" className="wrap">
        <section className="container">
          <div className="inner">
            <div className="mainTextBox">
              <span className="pageTitle">{`Projects`}</span>
              <p className="pageSubtitle">{`List of projects`}</p>
            </div>
            <ul className="projectList">
              <li className="project a">
                <div className="topBox">
                  <h3 className="projectTitle">{`Meowtivation`}</h3>
                  <ul className="icons">
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="html5 icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="css3 icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="javascript icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="typescript icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcss icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="sqlite icon"/></li>
                  </ul>
                </div>
                <div className="bottomBox">
                  <p className="num">{`1`}</p>
                  <img className="projectPicture" src="../../images/meowtivation.png" alt="meowtivation preview"/>
                  <div className="descriptionBox">
                    <p className="projectDescription1">{`Teacher led project from Dev Academy`}</p>
                    <p className="projectDescription2">{`A social platform for pet users to create meowtivationals, browse the gallery, and connect with fellow cat enthusiasts`}</p>
                  </div>
                </div>
              </li>
              <li className="project b">
                <div className="topBox">
                  <h3 className="projectTitle">{`Fitness Quest`}</h3>
                  <ul className="icons">
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="html5 icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="css3 icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="javascript icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="typescript icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcss icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="sqlite icon"/></li>
                  </ul>
                </div>
                <div className="bottomBox">
                  <p className="num">{`2`}</p>
                  <img className="projectPicture" src="../../images/fitnessquest.png" alt="fitnessquest preview"/>
                  <div className="descriptionBox">
                    <p className="projectDescription1">{`Final Group project from Dev Academy`}</p>
                    <p className="projectDescription2">{`An app that encourages physical activity, making fitness fun and keeping you motivated`}</p>
                  </div>
                </div>
              </li>
              <li className="project c">
                <div className="topBox">
                  <h3 className="projectTitle">{`HKM Construction (In Progress)`}</h3>
                  <ul className="icons">
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="html5 icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="css3 icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="javascript icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="typescript icon"/></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcss icon"/></li>
                  </ul>
                </div>
                <div className="bottomBox">
                  <p className="num">{`3`}</p>
                  <div className="descriptionBox">
                    <p className="projectDescription1">{`Personal project for my family business`}</p>
                    <p className="projectDescription2">{`A website for HKM Construction LTD`}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}


export default Projects