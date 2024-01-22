import style from './Logo.module.css';

const Logo = () => {
  return (
    <div className={style.logo}>
      <div className={style.title}>MF</div>
      <div className={style.subtitle}>Magistry Finance</div>
    </div>
  )
};

export default Logo;