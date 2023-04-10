import s from  './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png'
        alt='header_img'
      />
    </header>
  )
}

export default Header
