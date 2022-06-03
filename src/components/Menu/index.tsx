import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';

export default function Menu() {
  const rotas = [{ titulo: 'Inicio', to: '/' }, { titulo: 'Cardapio', to: '/cardapio' }, { titulo: 'Sobre', to: '/sobre' }];

  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>{rota.titulo}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}