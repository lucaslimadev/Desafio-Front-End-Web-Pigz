import styles from './Header.module.css';

import logoPigz from '../assets/pigz-gestao-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoPigz} alt="Logo Pigz" />
            <button className={styles.buttonDefault}>Já sou parceiro</button>
        </header>
    );
}