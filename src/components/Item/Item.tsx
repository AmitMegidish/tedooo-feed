import React, { useCallback } from 'react';
import styles from './Item.module.css'
import { IItem } from '../../ts/interfaces';
import ItemInfo from '../ItemInfo/ItemInfo';
import ItemImage from '../ItemImage/ItemImage';
import ItemStats from '../ItemStats/ItemStats';
import ItemActions from '../ItemActions/ItemActions';

type Props = {
    item: IItem,
    handleLike: (itemId: string) => void
}


const Item = React.forwardRef<any, Props>(({ item, handleLike }, ref) => {
    const {
        id,
        username,
        shopName,
        text,
        didLike,
        likes,
        images,
        avatar,
        comments,
        date,
    } = item;


    const handleItemLike = useCallback(() => {
        handleLike(id);
    }, []);

    const itemBody = (
        <>
            <ItemInfo
                avatar={avatar}
                username={username}
                shopName={shopName}
                date={date}
                text={text}
            />
            <ItemImage images={images} />
            <ItemStats likes={likes} comments={comments} />
            <ItemActions
                didLike={didLike}
                handleLike={handleItemLike}
            />
            {/* <div className={styles.likesAndCommentsActions}>
                <button
                    style={{
                        width: "100px",
                        height: "40px",
                        border: "none",
                        display: "flex",
                        gap: "8px",
                        justifyContent: "stretch",
                        alignItems: "center",
                        backgroundColor: "#FFFFFF",
                    }}
                    onClick={() => handleLike(id)}
                >
                    <span style={{ height: "100%", display: "flex" }}>
                        <img src={didLike ? BlueLike : BlankLike} style={{ alignSelf: "center" }} height={24} width={18} alt="" />
                    </span>
                    <span style={{ color: didLike ? "#0A66C2" : "#484E4C" }}>Like</span>
                </button>
                <button
                    type='button'
                    style={{
                        width: "100px",
                        height: "40px",
                        border: "none",
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                        backgroundColor: "#FFFFFF",
                    }}>
                    <span style={{ height: "100%", display: "flex" }}>
                        <img src={Comment} style={{ alignSelf: "center" }} height={24} width={18} alt="" />
                    </span>
                    <span style={{ color: "#484E4C" }}>Comment</span>
                </button>
            </div> */}
        </>
    );

    const content = ref ? (
        <div className={styles.itemContainer} ref={ref}>
            {itemBody}
        </div>
    ) : (
        <div className={styles.itemContainer}>
            {itemBody}
        </div>);

    return content;
})

export default Item;
