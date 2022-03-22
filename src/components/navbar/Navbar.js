import { Link } from 'react-router-dom'
import Styles from './styles'

const Nav = () => {
  return (
    <Styles.Navbar>
      <Link style={{ textDecoration: 'none', marginRight: 'auto'}} to="/">
        <Styles.Link>Med Manager <Styles.Logo>+</Styles.Logo>
        </Styles.Link>
      </Link>
      <Link style={{ textDecoration: 'none', marginLeft: '1vw'}} to="/about">
        <Styles.Link>About</Styles.Link>
      </Link>
      <Link style={{ textDecoration: 'none', marginLeft: '1vw'}} to="/contact">
        <Styles.Link>Contact</Styles.Link>
        </Link>
      <Link style={{ textDecoration: 'none', marginLeft: '1vw'}} to="/signup">
        <Styles.Link>Signup
        </Styles.Link></Link>
      <Link style={{ textDecoration: 'none', marginLeft: '1vw'}} to="/login">
        <Styles.Link>Login
        </Styles.Link></Link>
    </Styles.Navbar>
  )
}

export default Nav