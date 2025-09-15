import { HashLink } from 'react-router-hash-link';

function Nav() {

  return (
    <>
      <div className="navWrapper">
        <ul className="navbar">
          <li><HashLink smooth to="#introduction">{`MIN SEUNGHYUN`}</HashLink></li>
          <li><HashLink smooth to="#projects">{`PROJECTS`}</HashLink></li>
          <li><HashLink smooth to="#aboutme">{`ABOUT ME`}</HashLink></li>
        </ul>
      </div>
    </>
  )
}

export default Nav