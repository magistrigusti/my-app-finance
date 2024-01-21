import style from './Header.module.css';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
    </header>
  )
};

export default Header;