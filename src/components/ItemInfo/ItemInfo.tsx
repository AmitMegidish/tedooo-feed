import React from 'react';
import styles from './ItemInfo.module.css'

type Props = {
    avatar: string,
    username: string,
    shopName: string,
    text: string,
    date: string
}

const ItemInfo: React.FC<Props> = ({
    shopName,
    username,
    avatar,
    text,
    date
}) => {
    return (
        <div className={styles.userAndTextContainer}>
            <div className={styles.user}>
                <img className={styles.avatar} src={avatar} alt="avatar" />
                <div className={styles.userTexts}>
                    <span style={{ fontWeight: "500" }}>{username}</span>
                    <div>
                        <span className={styles.shop}>{shopName ? shopName : "Unnamed shop"} </span>
                        <span className={styles.time}>&#8226;{new Date(date).getHours()}h</span>
                    </div>
                </div>
            </div>
            <div>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default ItemInfo