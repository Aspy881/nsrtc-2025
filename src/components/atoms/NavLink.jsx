import { Link } from "react-router-dom"

function NavLink({ to, children, className = "" }) {
  return (
    <Link to={to} className={`font-semibold ${className}`}>
      {children}
    </Link>
  )
}

export default NavLink
