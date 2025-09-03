import { HashLink } from 'react-router-hash-link';

function Nav() {

  return (
    <>
      <div className="navWrapper">
        <ul className="navbar">
          <li><HashLink smooth to="#section1">MIN SEUNGHYUN</HashLink></li>
          <li><HashLink smooth to="#section2">PROJECTS</HashLink></li>
          <li><HashLink smooth to="#section3">ABOUT ME</HashLink></li>
        </ul>
      </div>
    </>
  )
}

export default Nav