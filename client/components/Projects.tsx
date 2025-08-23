function Projects() {
  
  return (
    <>
      <div className="wrap">
        <section className="container">
          <div className="inner">
            <div className="mainTextBox">
              <h2 className="pageTitle">Projects</h2>
              <p className="pageSubtitle">List of projects</p>
            </div>
            <ul className="projectList">
              <li className="project a">
                <div className="topBox">
                  <h3 className="projectTitle">Project 1</h3>
                  <ul className="icons">
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" /></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /></li>
                  </ul>
                  {/* <ul className="icon">
                    <li><a href="#"><img src="images/icon1" alt=""></img></a></li>
                    <li><a href="#"><img src="images/icon2" alt=""></img></a></li>
                    <li><a href="#"><img src="images/icon3" alt=""></img></a></li>
                  </ul> */}
                </div>
                <div className="bottomBox">
                  <p className="num">1</p>
                  <div className="descriptionBox">
                    <p className="projectDescription1">Project A description 1</p>
                    <p className="projectDescription2">Project A description 2</p>
                  </div>
                </div>
              </li>
              <li className="project b">
                <div className="topBox">
                  <h3 className="projectTitle">Project 2</h3>
                  <ul className="icons">
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" /></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /></li>
                  </ul>
                  {/* <ul className="icon">
                    <li><a href="#"><img src="images/icon1" alt=""></img></a></li>
                    <li><a href="#"><img src="images/icon2" alt=""></img></a></li>
                    <li><a href="#"><img src="images/icon3" alt=""></img></a></li>
                  </ul> */}
                </div>
                <div className="bottomBox">
                  <p className="num">2</p>
                  <div className="descriptionBox">
                    <p className="projectDescription1">Project B description 1</p>
                    <p className="projectDescription2">Project B description 2</p>
                  </div>
                </div>
              </li>
              <li className="project c">
                <div className="topBox">
                  <h3 className="projectTitle">Project 3</h3>
                  <ul className="icons">
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" /></li>
                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /></li>
                  </ul>
                  {/* <ul className="icon">
                    <li><a href="#"><img src="images/icon1" alt=""></img></a></li>
                    <li><a href="#"><img src="images/icon2" alt=""></img></a></li>
                    <li><a href="#"><img src="images/icon3" alt=""></img></a></li>
                  </ul> */}
                </div>
                <div className="bottomBox">
                  <p className="num">3</p>
                  <div className="descriptionBox">
                    <p className="projectDescription1">Project C description 1</p>
                    <p className="projectDescription2">Project C description 2</p>
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