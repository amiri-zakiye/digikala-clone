import { apiClient } from "@/lib/apiClient";
import SortOption from "./_components/sortOption";
import { ShopResponse } from "../../../filtersSidebar/types";

const SortOptions = async() => {
    
    const {data} = await apiClient.get<ShopResponse>(`products/v1`)
    const sort_options = data.sort_options

    return(
        <>
            {
                sort_options.map((item: any) => (
                    <SortOption key={item.id} item={item} />
                ))
            }
        </>
    )
}

export default SortOptions;