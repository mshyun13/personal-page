// import { useFruits } from '../hooks/useFruits.ts'

import Introduction from "./Introduction"
import Projects from "./Projects"

function App() {
  // const { data } = useFruits()

  return (
    <>
      {/* <div className="app"> */}
        {/* <h1>Personal Page</h1> */}
        {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
      {/* </div> */}
      <Introduction />
      <Projects />
    </>
  )
}

export default App
