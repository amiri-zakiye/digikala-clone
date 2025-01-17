import { FilterTypes } from "../../types";
import CheckboxFilter from "./_components/checkboxFilter";
import FilterLayout from "./_components/filterLayout";
import SwitcherFilter from "./_components/switcherFilter";

const Filter = <T extends FilterTypes>({filter,filterId}: {filter: T,filterId: string }) => {
    const { type } = filter;
    let filterComponent

    switch (type) {
        case "switch":
            filterComponent = <SwitcherFilter  filterId={filterId} />
            break
        case "checkbox":
            filterComponent = <CheckboxFilter filter={filter} filterId={filterId} />
            break
        case "category_list":
            // filterComponent = <CategoryFilter />
            filterComponent = null
            break
        default:
            filterComponent = null;
    }

    return (
        <FilterLayout filter={filter}>
            {filterComponent}
        </FilterLayout>
    )
}
export default Filter;