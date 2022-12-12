import { Link } from 'react-router-dom'

const Navbar = ({ handleLogout, user, authenticated }) => {
  return user && authenticated ? (
    <nav className="d-flex align-items-right navbar navbar-expand-lg bg-dark  navbar-dark border-bottom border-secondary nav-container">
      <div className=" container">
        <Link className="text-white px-2 nav-item" to="/">
          <h3>Home</h3>
        </Link>
        <Link className="text-white px-2 nav-item" to="/about">
          <h3>About</h3>
        </Link>
        <Link className="text-white px-2 nav-item" to="/dashboard">
          <h3>Dashboard</h3>
        </Link>
        <Link className="text-white px-2 nav-item" to="/profile">
          <h3>Profile</h3>
        </Link>
        <button className="text-black px-2 nav-item" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </nav>
  ) : (
    <nav className="d-flex align-items-right navbar navbar-expand-lg bg-dark  navbar-dark border-bottom border-secondary nav-container">
      <div className=" container">
        <Link className="text-white px-2 nav-item" to="/">
          <h3>Home</h3>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
