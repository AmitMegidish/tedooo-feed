import React from 'react';
import styles from './Link.module.css';

type Props = {
    index: number,
    name: string,
    icon: string
}

const Link: React.FC<Props> = ({ index, name, icon }) => {
    return (
        <div
            className={styles.link}
            style={{ borderBottom: index === 0 ? "2px solid #2DB8A1" : "" }}
        >
            <img src={icon} alt={name} />
            <span style={{ color: index === 0 ? "#2DB8A1" : "" }}>{name}</span>
        </div>
    );
};

export default Link;