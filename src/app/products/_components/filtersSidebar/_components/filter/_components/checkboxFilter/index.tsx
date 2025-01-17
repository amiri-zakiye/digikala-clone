import CheckBoxFilterOption from "./checkboxFilterOption"; 
import styles from "./styles.module.css";
import { CheckBoxFilter as CheckBoxFilterType } from "./types";

const CheckboxFilter = ({filter,filterId}: { filter: CheckBoxFilterType,filterId:string }) => {
    return (
        <div className={`lg:overflow-y-auto pt-1 ${styles.checkbox_filter_list} lg:px-5`}>
            {
                filter.options.slice(0,100).map((option ) => (
                    <CheckBoxFilterOption key={option.id} option={option} filterId={filterId}/>
                ))
            }
        </div>
    )
}

export default CheckboxFilter;