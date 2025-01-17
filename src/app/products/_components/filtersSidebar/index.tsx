import { apiClient } from "@/lib/apiClient";
import Filter from "./_components/filter"
import { ShopResponse } from "./types"

const FiltersSidebar = async() => {

    const {data} = await apiClient.get<ShopResponse>(`products/v1`)  
    const filters = data.filters

    return(
        <section className="z-1 top-0 flex flex-col w-[300px] h-max">
            <div className="lg:w-full border border-neutral-200 rounded-sm h-auto">
                <div className="w-full hidden lg:block py-4 text-h4 lg:px-5">
                    <p className="w-full flex items-center justify-start grow text-neutral-700">
                        فیلترها
                    </p>
                </div>
                {Object.entries(filters).map(([key, filter]) => (
                    <Filter key={key} filterId={key} filter={filter}/>
                ))}
            </div>
        </section>
    )
}

export default FiltersSidebar;  