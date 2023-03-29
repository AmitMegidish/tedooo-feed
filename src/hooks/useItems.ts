import { useCallback } from "react";
import type { IItem, TApiRes } from "../ts/interfaces";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import instance from "../api";

const useItems = (itemsToSkip: number) => {
    const [items, setItems] = useState<IItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [hasMore, setHasMore] = useState<boolean>(false);

    const handleItemLike = useCallback((itemId: string) => {
        setItems(prevItems => {
            const itemsCopy = [...prevItems];
            let findItem = itemsCopy.find(({ id }) => id === itemId);

            if (!findItem) {
                return itemsCopy;
            }

            const currentStatus = findItem.didLike;

            findItem.didLike = !currentStatus
            findItem.likes = currentStatus ? findItem.likes - 1 : findItem.likes + 1

            return itemsCopy;
        });
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        const fetchItems = async () => {
            setIsLoading(true);
            setError("");

            try {
                const { data } = await instance.get<TApiRes>("", {
                    params: {
                        skip: itemsToSkip
                    },
                    signal: controller.signal
                });

                setItems(prevItems => [...prevItems, ...data.data]);
                setHasMore(data.hasMore);
            } catch (err) {
                const error = err as AxiosError;
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchItems();

        return () => controller.abort();
    }, [itemsToSkip]);

    return {
        items,
        isLoading,
        error,
        hasMore,
        handleItemLike
    };
}

export default useItems;