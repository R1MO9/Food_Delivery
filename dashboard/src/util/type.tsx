
export type Category = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id: any;
    name: string;
    restaurants: number;
    quantity: number;
    imageName: string;
    image: Uint8Array;
}

export type CategoriesItemProps = {
    item: Category;
    index: number;
}