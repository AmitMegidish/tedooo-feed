import React from 'react';
import styles from './ItemButton.module.css';

type Props = {
    clickHandler?: () => void,
    text: string,
    textColor: string,
    icon: string
}

const ItemButton: React.FC<Props> = ({ icon, clickHandler, textColor, text }) => {
    return (
        <button
            className={styles.button}
            onClick={clickHandler}
        >
            <span className={styles.iconContainer}>
                <img src={icon} alt="icon" />
            </span>
            <span style={{ color: textColor, fontWeight: 500 }}>{text}</span>
        </button>
    );
};

export default ItemButton;

