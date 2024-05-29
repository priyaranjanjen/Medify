/* eslint-disable react/prop-types */
import styles from './card.module.css';

export default function Card({ image, heading, customStyle }) {
    return (
        <div className={`${styles.card} ${styles[customStyle]}`}>
            <div className={styles.cardImage}>
                {image}
            </div>
            <div className={styles.cardText}>
                {heading}
            </div>
        </div>
    );
}
