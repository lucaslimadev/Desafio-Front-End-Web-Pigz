import styles from './CardButton.module.css'

export function CardButton({ title, description, price, buttonTitle }) {
    return (
        <div className={styles.cardButton}>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                <li>Pigz Marketplace</li>
                <li>Página exclusiva</li>
                <li>Pigz Gestão Desktop e Mobile</li>
                <li>Gestão de entregadores</li>
                <li>Vias de impressão personalizáveis</li>
            </ul>
            <h4>{price}</h4>
            <button>{buttonTitle}</button>
        </div>
    );
}