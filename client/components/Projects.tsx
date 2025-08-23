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
                  {/* <ul className="icon">
                    <li><a href="#"><img src="images/icon1" alt=""></img></a></li>
                    <li><a href="#"><img src="images/icon2" alt=""></img></a></li>
                    <li><a href="#"><img src="images/icon3" alt=""></img></a></li>
                  </ul> */}
                </div>
                <div className="bottomBox">
                  <p className="num">1</p>
                  <div className="descriptionBox">
                    <p className="projectDescription1">Project description 1</p>
                    <p className="projectDescription2">Project description 2</p>
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