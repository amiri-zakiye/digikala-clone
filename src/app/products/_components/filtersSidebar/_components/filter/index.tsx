
const Filter = <T extends FilterTypes>({filter,filterId}: {filter: T,filterId: string }) => {
    const { type } = filter;
    let filterComponent

    // switch (type) {
    //     case "switch":
    //         filterComponent = <SwitchFilter  filterId={filterId} />
    //         break
    //     case "checkbox":
    //         filterComponent = <CheckBoxFilter filter={filter} filterId={filterId} />
    //         break
    //     case "category_list":
    //         filterComponent = <CategoryFilter />
    //         break
    //     default:
    //         filterComponent = null;
    // }

    return (
        // <FilterLayout filter={filter}>
            // {filterComponent}
        <></>
        // </FilterLayout>
    )
}
export default Filter;