import React, { useState, useCallback, useRef } from 'react';
import Item from '../../components/Item/Item';
import useItems from '../../hooks/useItems';

const Feed: React.FC = () => {
    const [itemsToSkip, setSkip] = useState<number>(0);

    const {
        items,
        isLoading,
        error,
        hasMore,
        handleItemLike
    } = useItems(itemsToSkip);

    const intObserver = useRef<IntersectionObserver>();

    const lastItemRef = useCallback((item: Element) => {
        if (isLoading) {
            return;
        }

        if (intObserver.current) {
            intObserver.current.disconnect();
        }

        intObserver.current = new IntersectionObserver(items => {
            if (items[0].isIntersecting && hasMore) {
                setSkip(prevSkip => prevSkip + 6);
            }
        });

        if (item) {
            intObserver.current.observe(item);
        }
    }, [isLoading, hasMore])

    const content = items.map((item, i) => {
        if (items.length === i + 1) {
            return (
                <Item
                    key={item.id}
                    item={item}
                    handleLike={handleItemLike}
                    ref={lastItemRef}
                />
            );
        }

        return (
            <Item
                key={item.id}
                item={item}
                handleLike={handleItemLike}
            />
        );
    });

    return (
        <>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {content}
        </>
    );
};

export default Feed;
