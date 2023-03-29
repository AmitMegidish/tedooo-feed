import React from 'react';
import styles from './ItemActions.module.css';
import Comment from '../../assets/comment.svg';
import BlankLike from '../../assets/like-blank.svg';
import BlueLike from '../../assets/like-blue.svg';
import ItemButton from '../ItemButton/ItemButton';

type Props = {
    didLike: boolean,
    handleLike: () => void
}

const ItemActions: React.FC<Props> = ({ didLike, handleLike }) => {
    return (
        <div className={styles.likesAndCommentsActions}>
            <ItemButton
                icon={didLike ? BlueLike : BlankLike}
                text="Like"
                textColor={didLike ? "#0A66C2" : "#484E4C"}
                clickHandler={handleLike}
            />
            <ItemButton
                icon={Comment}
                text="Comment"
                textColor="#484E4C"
            />
        </div>
    )
}

export default ItemActions