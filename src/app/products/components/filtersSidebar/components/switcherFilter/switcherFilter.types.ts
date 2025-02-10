export type SwitchFilter = {
    type: "switch";
    title: string;
    icon ?: string;
    options ?: {
        id: number,
        title: string,
    }[]
}