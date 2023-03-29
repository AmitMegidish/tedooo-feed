import React from 'react';
import styles from './ItemStats.module.css';
import Like from '../../assets/like.svg';

type Props = {
    likes: number,
    comments: number
}

const ItemStats: React.FC<Props> = ({ likes, comments }) => {
    return (
        <div className={styles.likesAndCommentsData}>
            <div className={styles.likes}>
                <img src={Like} alt="like" />
                <span>{likes} Likes</span>
            </div>

            <div>
                <span>{comments} Comments</span>
            </div>
        </div>
    )
}

export default ItemStats;