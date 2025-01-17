import SortOption from "./_components/sortOption";
import productApiClient from "@/features/product/apiLayer/product"

const SortOptions = async() => {
    
    const {data} = await productApiClient.getProducts()
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