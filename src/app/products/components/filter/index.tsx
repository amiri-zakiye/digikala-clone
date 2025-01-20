import { FilterTypes } from "../../products.type";
import CheckboxFilter from "../checkboxFilter";
import FilterLayout from "../filterLayout";
import SwitcherFilter from "../switcherFilter";

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