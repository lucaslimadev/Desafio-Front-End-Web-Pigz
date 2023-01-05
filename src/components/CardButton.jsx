import styles from './CardButton.module.css'


/*const cardsList = [
    {
        id: 1,
        card: {
            title: 'Pigz',
            description: 'Tudo o que você precisa',
        },
        contentDescription: [
            { type: 'paragraph', content: 'Pigz Marketplace'},
            { type: 'paragraph', content: 'Página exclusiva'},
            { type: 'paragraph', content: 'Pigz Gestão Desktop e Mobile'},
        ],
        contentFooter: {
            prince: 'R$199/mês',
            button: 'Vender no Pigz agora'
        }
        
    }
]*/

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