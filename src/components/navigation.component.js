const Nav = ({ title, links }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top p-2 bg-light">
      <a className="navbar-brand text-primary" href="#">
        {title}
      </a>
      <ul className="navbar-nav flex-row" id="tabs" role="tablist">
        {links.map((link) => {
          return (
            <li className="nav-item mx-2">
              <a
                className={`nav-link active primary link-primary ${link.addClass}`}
                id={link.id}
                data-bs-toggle={link.toggle}
                href={link.href}
              >
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
