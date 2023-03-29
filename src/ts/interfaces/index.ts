export type IItem = {
    id: string,
    userId: string,
    username: string,
    avatar: string,
    shopName: string,
    shopId: string,
    images: string[],
    comments: number,
    date: string,
    text: string,
    likes: number,
    didLike: boolean,
    premium: boolean
};

export type TApiRes = {
    hasMore: boolean,
    data: IItem[]
}