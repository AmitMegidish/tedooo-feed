import React from 'react';
import styles from './ItemImage.module.css';

type Props = {
    images: string[]
}

const ItemImage: React.FC<Props> = ({ images }) => {
    return (
        <div className={styles.imagesContainer}>
            {images.slice(0, 2).map((image => (
                <img
                    key={image}
                    src={image}
                    className={styles.itemImage}
                    loading='lazy'
                    alt='Item'
                />
            )))}
        </div>
    );
};

export default ItemImage;