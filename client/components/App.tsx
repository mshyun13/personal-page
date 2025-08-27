// import { useFruits } from '../hooks/useFruits.ts'

import AboutMe from "./AboutMe"
import Introduction from "./Introduction"
import Nav from "./Nav"
import Projects from "./Projects"

function App() {
  // const { data } = useFruits()

  return (
    <>
      {/* <div className="app"> */}
        {/* <h1>Personal Page</h1> */}
        {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
      {/* </div> */}
      <Nav />
      <Introduction />
      <Projects />
      <AboutMe />
    </>
  )
}

export default App
