import styles from "./header.module.css"

const SearchIcon = () => {
    return (
        <svg width="24px" height="24px" className={"fill-icon-low-emphasis"}>
            <path fillRule="evenodd"
                d="M10.5 18a7.5 7.5 0 115.973-2.963l4.369 4.246-1.394 1.434-4.387-4.263A7.467 7.467 0 0110.5 18zm5.5-7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                clipRule="evenodd" />
        </svg>
    )
}

const Search = () => {
    return (
        <form className={`flex items-center bg-neutral-100 rounded-sm px-4 w-full ${styles.search_form}`}>
            <SearchIcon  />
            <input
                type="text"
                placeholder="جستجو"
                className="flex-1 text-neutral-500 bg-transparent px-4 outline-none text-body-2"
            />
        </form>
    )

}
export default Search