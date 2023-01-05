import styles from './Card.module.css';

export function Card({ title, description, image, alt }) {
    return (
      <div className={styles.cards}>
        <img src={image} alt={alt} />
        <p>{title}</p>
        <span>{description}</span>
      </div>
    )
  }