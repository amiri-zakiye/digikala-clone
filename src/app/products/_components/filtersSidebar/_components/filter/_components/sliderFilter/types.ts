
export type SliderFilter = {
    type: "slider";
    title: string;
    options: {
        min: number,
        max: number,
    }
}