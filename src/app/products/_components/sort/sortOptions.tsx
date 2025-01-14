import { apiClient } from "@/lib/apiClient";
import SortItem from "./sortOption";

const SortOptions = async() => {
    
    const {sort_options} = await apiClient.get(`products/v1`)

    return(
        <>
            {
                sort_options.map((item: any) => (
                    <SortItem key={item.id} item={item} />
                ))
            }
        </>
    )
}

export default SortOptions;