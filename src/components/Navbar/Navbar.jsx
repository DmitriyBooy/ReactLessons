import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href='src/components#s'>
          Profile
        </a>
      </div>
      <div className={s.item}>
        <a href='src/components#s'>
          Messages
        </a>
      </div>
      <div className={s.item}>
        <a href='src/components#s'>
          News
        </a>
      </div>
      <div className={s.item}>
        <a href='src/components#s'>
          Music
        </a>
      </div>
      <div className={s.item}>
        <a href='src/components#s'>
          Settings
        </a>
      </div>
    </nav>
  )
}

export default Navbar
