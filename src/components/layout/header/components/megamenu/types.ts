export type Category = {
    id:number,
    children: Category[],
    column_number: number,
    icon: string,
    title: string,
    url: string,
}
