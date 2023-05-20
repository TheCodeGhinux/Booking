import { useContext } from "react"
import "./navbar.css"
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {

  const { user } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className='logo'>TcgBooking</span>
        </Link>
        {user ? (
          <Link
            to='/'
            style={{ color: 'inherit', textDecoration: 'none' }}
            className='navUserCon'
          >
            <FontAwesomeIcon icon={faUser} />
            <h3 className=''>{user.username}</h3>
          </Link>
        ) : (
          <div className='navItems'>
            <button className='navButton'>Register</button>
            <button className='navButton'>Login</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar