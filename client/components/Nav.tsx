import { HashLink } from 'react-router-hash-link';

function Nav() {

  return (
    <>
      <div className="navWrapper">
        <ul className="navbar">
          <li><HashLink to="#section1" className="active">MIN SEUNGHYUN</HashLink></li>
          <li><HashLink to="#section2">PROJECTS</HashLink></li>
          <li><HashLink to="#section3">ABOUT ME</HashLink></li>
        </ul>
      </div>
    </>
  )
}

export default Nav