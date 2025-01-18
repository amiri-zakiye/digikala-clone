"use client"

const SortOption = ({item}: {item: any}) => {
    return(
        <span
            onClick={() => {}}
            key={item.id}
            className={`cursor-pointer whitespace-nowrap text-body-2 
            ${ false ? 
                "text-primary-700 text-caption-strong" : 
                "text-neutral-500"}`
            }
            >{item.title_fa}
        </span>
    )
}

export default SortOption;