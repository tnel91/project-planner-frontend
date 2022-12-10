import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="d-flex align-items-right navbar navbar-expand-lg bg-dark  navbar-dark border-bottom border-secondary nav-container">
      <div className=" container">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/about">
          <h3>About</h3>
        </Link>
        <Link to="/dashboard">
          <h3>Dashboard</h3>
        </Link>
        <Link to="/profile">
          <h3>Profile</h3>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
